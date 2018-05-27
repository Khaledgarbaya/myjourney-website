import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Trip extends Component {
  render () {
    const {
      title,
      content
    } = this.props.data.contentfulTrip

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
      </div>
    )
  }
}

Trip.propTypes = {
  data: PropTypes.object.isRequired
}

export default Trip

export const pageQuery = graphql`
  query tiprQuery($slug: String!) {
    contentfulTrip(slug: {eq: $slug}){
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
