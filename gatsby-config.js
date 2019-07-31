module.exports = {
  siteMetadata: {
    title: `迫真の氷結晶`,
    phrase: `初投稿です。`,
    description: `いの(@iciclize)による、技術・ポエムブログ/ポートフォリオサイトです。`,
    author: `@iciclize`,
    siteUrl: `https://iciclize.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://nnyapi.iciclize.net`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`,
          `user`,
          `tag`
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iciclize.net`,
        short_name: `iciclize.net`,
        start_url: `/`,
        background_color: `#99d6ff`,
        theme_color: `#99d6ff`,
        display: `minimal-ui`,
        icon: `src/images/IceCircle512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '*' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
