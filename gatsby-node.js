/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

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
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  console.log(process.env.NODE_ENV);

  const getArticles = makeRequest(
    graphql,
    `{
  allStrapiArticle(sort: {publish_date: ASC}, filter: {slug: {ne: "dummy-post"}}) {
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
}`
  ).then((result) => {
    result.data.allStrapiArticle.edges.forEach(({ node }, index, edges) => {
      const targetTag = node.tags[0]?.slug;

      function getLatterOrPreviousNPostIds(
        n,
        startPos,
        direction,
        tag,
        allPosts
      ) {
        let i = startPos;
        while (true) {
          if (direction == "Latter") {
            i++;
            if (i >= allPosts.length) break;
          } else {
            i--;
            if (i < 0) break;
          }

          if (allPosts[i].node.tags.find((t) => t.slug == tag)) {
            if (n == 1) {
              return [allPosts[i].node.id];
            } else {
              return [allPosts[i].node.id].concat(
                getLatterOrPreviousNPostIds(n - 1, i, direction, tag, allPosts)
              );
            }
          }
        }
        return [];
      }

      const latter4Posts = getLatterOrPreviousNPostIds(
        4,
        index,
        "Latter",
        targetTag,
        edges
      );
      const previous4Posts = getLatterOrPreviousNPostIds(
        4,
        index,
        "Previous",
        targetTag,
        edges
      );

      createPage({
        path: `/posts/${node.slug}/`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
          relatedPostIds: latter4Posts.reverse().concat(previous4Posts),
        },
      });
    });
  });

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
  ).then((result) => {
    result.data.allStrapiTag.nodes.forEach((tag) => {
      createPage({
        path: `/tags/${tag.slug}/`,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          slug: tag.slug,
          tagname: tag.tagname,
        },
      });
    });
  });

  const getWorks = makeRequest(
    graphql,
    `{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
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
}`
  ).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }, i, arr) => {
      const prev = i < arr.length - 1 ? arr[i + 1].node : null;
      const next = i > 0 ? arr[i - 1].node : null;
      createPage({
        path: `/works/${node.frontmatter.slug}/`,
        component: path.resolve(`src/templates/work-detail.js`),
        context: {
          id: node.id,
          next: next && next.id,
          prev: prev && prev.id,
        },
      });
    });
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getArticles, getTags, getWorks]);
};
