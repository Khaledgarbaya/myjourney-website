import React from 'react'

const About = ({data}) => {
  return (
    <div>
      <h1> {data.contentfulPage.title} </h1>
     <div dangerouslySetInnerHTML={{__html: data.contentfulPage.content.childMarkdownRemark.html}}/>
    </div>
  )
}


export default About

export const aboutQery = graphql`
  query aboutQuery{
    contentfulPage(slug: {eq: "about"}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
