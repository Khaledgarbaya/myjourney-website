import React from 'react'
import Link from 'gatsby-link'


const Trip = ({node}) => {
  return(<li>
    <img src={node.image.responsiveResolution.src} />
    <Link to={node.slug}><h3>{node.title}</h3></Link>
    <div>{node.content.childMarkdownRemark.excerpt}</div>
  </li>)
}
const IndexPage = ({data}) => (
  <div>
  <ul className='blog-post'>
      {data.allContentfulTrip.edges.map((edge) => <Trip node={edge.node}/>)}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery{
    allContentfulTrip (
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort:{ fields: [createdAt], order: DESC }
    ){
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            responsiveResolution(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
