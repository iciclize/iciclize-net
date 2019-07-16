/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const crypto = require('crypto');
const path = require(`path`);

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode } = actions;
  if (node.internal.type === 'StrapiArticle') {
    createNode({
      ...node,
      id: node.id + '-markdown',
      parent: node.id,
      children: [],
      internal: {
        type: 'Post',
        mediaType: 'text/markdown',
        content: node.content,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`)
      }
    });
  }
};


const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const getArticles = makeRequest(graphql, `
    {
      allPost(
        sort: {fields: publish_date, order: ASC},
        filter: {published: {eq: 1}, slug: {ne: "dummy-post"}}
      ) {
        edges {
          node {
            id
            slug
            tags {
              slug
            }
          }
        }
      }
    }  
    `).then(result => {
    result.data.allPost.edges.forEach(({ node }, index, edges) => {
      function searchPrevNextId(start, dir, arr) {
        if (!arr[start].node.tags ||
            arr[start].node.tags.length == 0) return null
        const category = arr[start].node.tags[0].slug
        const num = dir ? arr.length - start - 1 : start
        for (let i = 1; i <= num; i++) {
          let cur = dir ? arr[start + i] : arr[start - i]
          if (cur.node.tags && cur.node.tags.length > 0 &&
              cur.node.tags[0].slug === category )
            return cur.node.id
        }
      }
      createPage({
        path: `/posts/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
          nextId: searchPrevNextId(index, true, edges),
          prevId: searchPrevNextId(index, false, edges),
        },
      })
    })
  });

  const getTags = makeRequest(graphql, `
    {
      allStrapiTag(filter: {slug: {ne: "dummy-tag"}}) {
        nodes {
          slug
          tagname
        }
      }
    }
  `).then(result => {
    result.data.allStrapiTag.nodes.forEach( tag => {
      createPage({
        path: `/tag/${tag.slug}`,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          slug: tag.slug,
          tagname: tag.tagname,
        },
      })
    })
  })

  const getWorks = makeRequest(graphql, `
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC},
        filter: {fileAbsolutePath: {regex: "/.*\/src\/pages\/works\/.*/"}}
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY年M月")
              description
              imagename
              
            }
            id
            rawMarkdownBody
          }
        }
      }
      allImageSharp(sort: {fields: fluid___originalName, order: ASC}) {
        edges {
          node {
            id
            fluid {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }    
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach( ({ node }, i, arr) => {
      const prev = (i < arr.length - 1) ? arr[i + 1].node : null
      const next = (i > 0) ? arr[i - 1].node : null
      createPage({
        path: `/works/${node.frontmatter.slug}`,
        component: path.resolve(`src/templates/work-detail.js`),
        context: {
          id: node.id,
          imagename: node.frontmatter.imagename,
          next: next && next.id,
          nextimg: next && next.frontmatter.imagename,
          prev: prev && prev.id,
          previmg: prev && prev.frontmatter.imagename,
        }
      })
    })
  })

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getTags,
    getWorks,
  ])
};