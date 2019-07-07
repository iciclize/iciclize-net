/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

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
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/posts/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getTags = makeRequest(graphql, `
    {
      allStrapiTag {
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

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getTags,
  ])
};