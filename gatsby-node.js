/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// from https://github.com/strapi/gatsby-source-strapi/issues/89
const crypto = require(`crypto`);
module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    if (node.internal.type === "StrapiArticle") {
        const newNode = {
            id: createNodeId(`StrapiArticleContent-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node.content || " ",
                type: "StrapiArticleContent",
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node.content || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
};

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

    console.log(process.env.NODE_ENV)

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle(
        sort: {fields: publish_date, order: ASC},
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
    `
  ).then(result => {
    console.log(result);
    result.data.allStrapiArticle.edges.forEach(({ node }, index, edges) => {
      function searchPrevNextId(start, dir, arr) {
        if (!arr[start].node.tags || arr[start].node.tags.length == 0)
          return null
        const category = arr[start].node.tags[0].slug
        const num = dir ? arr.length - start - 1 : start
        for (let i = 1; i <= num; i++) {
          let cur = dir ? arr[start + i] : arr[start - i]
          if (
            cur.node.tags &&
            cur.node.tags.length > 0 &&
            cur.node.tags[0].slug === category
          )
            return cur.node.id
        }
      }
      const nextId = searchPrevNextId(index, true, edges)
      const prevId = searchPrevNextId(index, false, edges)
      createPage({
        path: `/posts/${node.slug}/`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
          nextId: nextId,
          prevId: prevId
        },
      })
    })
  })

  const getTags = makeRequest(
    graphql,
    `
    {
      allStrapiTag(filter: {slug: {ne: "dummy-tag"}}) {
        nodes {
          slug
          tagname
        }
      }
    }
  `
  ).then(result => {
    result.data.allStrapiTag.nodes.forEach(tag => {
      createPage({
        path: `/tags/${tag.slug}/`,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          slug: tag.slug,
          tagname: tag.tagname,
        },
      })
    })
  })

  const getWorks = makeRequest(
    graphql,
    `
    {
      allMdx(
        sort: {fields: frontmatter___date, order: DESC},
        filter: {fileAbsolutePath: {regex: "works/"}}
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-M")
              title
              slug
              description
              imagename {
                childImageSharp {
                  gatsbyImageData(width: 360, layout: CONSTRAINED)
                }
              }
            }
            id
          }
        }
      }
    }    
  `
  ).then(result => {
    result.data.allMdx.edges.forEach(({ node }, i, arr) => {
      const prev = i < arr.length - 1 ? arr[i + 1].node : null
      const next = i > 0 ? arr[i - 1].node : null
      createPage({
        path: `/works/${node.frontmatter.slug}/`,
        component: path.resolve(`src/templates/work-detail.js`),
        context: {
          id: node.id,
          next: next && next.id,
          prev: prev && prev.id,
        },
      })
    })
  })

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getArticles, getTags, getWorks])
}
