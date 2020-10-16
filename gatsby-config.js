require('dotenv').config()

module.exports = {
  // siteMetadata is empty because those values are fetched from the WordPress settings.
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
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
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        base64Width: 20,
        forceBase64Format: ``, // Valid formats: png, jpg, webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL,
        schema: {
          // Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          // Caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Only 50 posts are pulled in development to make it faster.
                  50
                : // This creates a limit of 5000 in production but can be changed.
                  5000,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
