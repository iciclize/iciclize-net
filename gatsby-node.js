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

  const getWorks = makeRequest(graphql, `
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
      Armwrestling: file(relativePath: {eq: "Armwrestling.jpg"}) { ...f },
      Atsumoriapp: file(relativePath: {eq: "Atsumoriapp.jpg"}) { ...f },
      Kasuganoff: file(relativePath: {eq: "Kasuganoff.jpg"}) { ...f },
      IoT_Express: file(relativePath: {eq: "IoT_Express.jpg"}) { ...f },
      Router: file(relativePath: {eq: "Router.jpg"}) { ...f },
      Seat: file(relativePath: {eq: "Seat.jpg"}) { ...f },
      Splaturn: file(relativePath: {eq: "Splaturn.jpg"}) { ...f },
      Suzumebachi: file(relativePath: {eq: "Suzumebachi.jpg"}) { ...f },
      V2: file(relativePath: {eq: "V2.jpg"}) { ...f },
      YSFH_Access: file(relativePath: {eq: "YSFH_Access.jpg"}) { ...f },
      YSFH_Watcher: file(relativePath: {eq: "YSFH_Watcher.jpg"}) { ...f },
      ICE_commander: file(relativePath: {eq: "ICE_commander.jpg"}) { ...f },
      IciclizeNet: file(relativePath: {eq: "IciclizeNet.jpg"}) { ...f },
    }
    fragment f on File {
      childImageSharp {
        fluid(maxWidth: 620, maxHeight: 388) {
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
  `).then(result => {
    createPage({
      path: `/works`,
      component: path.resolve(`src/templates/works.js`),
      context: result
    })
    result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
      createPage({
        path: `/works/${node.frontmatter.slug}`,
        component: path.resolve(`src/templates/work-detail.js`),
        context: {
          title: node.frontmatter.title,
          timing: node.frontmatter.date,
          image: node.frontmatter.imagename
                 && result.data[`${node.frontmatter.imagename}`]
                 && result.data[`${node.frontmatter.imagename}`].childImageSharp.fluid,
          content: node.rawMarkdownBody,
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