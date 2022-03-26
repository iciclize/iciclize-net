module.exports = {
  siteMetadata: {
    title: `迫真の氷結晶`,
    phrase: `初投稿です。`,
    description: `いの(@iciclize)による、技術・ブログだったりポートフォリオサイトだったりします。`,
    author: `@iciclize`,
    siteUrl: `https://iciclize.net`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `./works/`,
      },
      __key: `works`,
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://nnyapi.iciclize.net`,
        collectionTypes: [`article`, `user`, `tag`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [ ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-twitter`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `iciclize.net`,
    //     short_name: `iciclize.net`,
    //     start_url: `/`,
    //     background_color: `#99d6ff`,
    //     theme_color: `#99d6ff`,
    //     display: `minimal-ui`,
    //     icon: `src/images/IceCircle512x512.png`, // This path is relative to the root of the site.
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [{ userAgent: '*', disallow: ['/nicovideo'], allow: '*' }]
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-matomo',
    //   options: {
    //     siteId: '2',
    //     matomoUrl: 'https://iciclize.net/anal/',
    //     disableCookies: true,
    //     siteUrl: 'https://iciclize.net',
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }
    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //     }`,
    //     serialize: ({site, allSitePage}) =>
    //       allSitePage.edges.map(edge => {
    //         return {
    //           url: site.siteMetadata.siteUrl + edge.node.path,
    //           changefreq: (/\/works\/.*/.test(edge.node.path))
    //                       ? `yearly`
    //                       : (/\/posts\/.*/.test(edge.node.path))
    //                         ? `monthly`
    //                         : `weekly`,
    //           priority: (/(\/works\/.*|\/profile\/)/.test(edge.node.path))
    //                       ? 0.7
    //                       : (/\/posts\/.*/.test(edge.node.path))
    //                         ? 1.0
    //                         : 0.0,
    //         }
    //       })
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
