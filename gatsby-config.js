const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        plugins: [
          // set up config for embedded images in mdx files
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              quality: 85,
              linkImagesToOriginal: false,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          // set up config for embedded images in mdx files
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              quality: 85,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ]
}
