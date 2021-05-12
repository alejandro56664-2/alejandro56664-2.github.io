module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Blog`,
    author: `Alejandro Morales Vásquez`,
    description: `Sitio donde registro ideas de mi interes. Solo escribo para no olvidar.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/alejandro56664`,
      },
      {
        name: `github`,
        url: `https://github.com/alejandro56664-adl`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin/in/jamoralesv`,
      },
      {
        name: `mail`,
        url: `mailto:ja.moralesv@hotmail.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        // basePath: `/blog`,
      },
    },
  ],
}
