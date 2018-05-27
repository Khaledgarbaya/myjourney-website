module.exports = {
  siteMetadata: {
    title: 'Khaled\'s journey',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zl5avipkzjs7',
        accessToken: '03bdd4aa3548455ef1b243561794053371aba313e60b1ef47feddc27153ef8d5'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}
