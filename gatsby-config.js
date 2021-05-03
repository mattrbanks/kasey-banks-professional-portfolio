module.exports = {
  siteMetadata: {
    title: `Professional portfolio Kasey Banks`,
    description: `This is a professional portfolio website for an educator.`,
    author: `Matthew R Banks`,
    image: `https://github.com/mattrbanks/kasey-banks-professional-portfolio/blob/master/src/images/kaseybanksportfoliosite.png?raw=true`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
        icon: `src/images/kasey-portfolio-logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
