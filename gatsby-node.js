const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const tripTemplate = path.resolve('src/templates/trip.js')
    resolve(
      graphql(`
      {
        allContentfulTrip(limit: 100) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulTrip.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: tripTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
