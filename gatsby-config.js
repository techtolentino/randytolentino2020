module.exports = {
  siteMetadata: {
    title: `Randy Tolentino`,
    description: `Randy Tolentino is an established Software Developer and Product Design Lead who’s committed to building high-quality, digital experiences for users everywhere. During off hours, he uses his unique literary style as a freelance writer to cover the intersections of family culture, career growth, and self-development. He lives with his wife, two kids, and the family 🐕.`,
    author: `@makertolentino`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/r.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `playfair display\:400,800`,
          `inter\:300,400,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -16
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-53693705-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://randytolentino.us4.list-manage.com/subscribe/post?u=f8599de6157bf645af19716a8&amp;id=e684e1ba78',
      },
    }
  ],
}
