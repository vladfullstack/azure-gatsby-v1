module.exports = {
  siteMetadata: {
    defaultTitle: `VLAD Demo Site`,
    titleTemplate: `%s · a starting point`,
    author: `@vladfullstack`,
    defaultDescription: `A Gatsby Starter Project Version 1`,
    siteUrl: `https://atticladderph.com`,
    logo: `/logo.png`,
    twitter: `@vladfullstack`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Events`,
        link: `/events`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-images",
        path: "./content/images/",
      },
      __key: "content-images",
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Event`, // a fixed string
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-events",
        path: "./content/events/",
      },
      __key: "content-events",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `./content/articles/`,
      },
      __key: "content-articles",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
  ],
}
