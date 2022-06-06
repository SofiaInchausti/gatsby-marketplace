require('dotenv').config({
  path: `.env.${process.env.node_env}`
})
const path= require('path')
module.exports = {
  siteMetadata: {
    title: `Starbucks coffee shop`,
    description: `The best coffee For the best YOU`,
    siteUrl: `https://www.yourdomain.tld`,
    author:'@sofiainchausti'
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-stripe`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
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
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:`gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [`Price`],
        secretKey: 'sk_test_51L47WKFf07Rh2N4FSx8kAiZD2gH7Szo6LVKmc94XaZblNUwdKwMzhvH1OQHCpUXTrHAVDQz7x3bWRGKJOUKw8Bit00VxiQE5G1',
      }
    }, 
     `gatsby-plugin-styled-components`,
  ],
}

