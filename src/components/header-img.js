import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const HeaderImg = () => {
    return (
        <StaticQuery
          query={imgQuery}
          render={data => {
            return (
                <Img
                  fixed={data.avatar.childImageSharp.fixed}
                  alt="Header Image"
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `5%`,
                  }}
                  imgStyle={{
                    borderRadius: `5%`,
                  }}
                />
    
            )
          }}
        />
      )
}
  
  const imgQuery = graphql`
  query imgQuery {
    avatar: file(absolutePath: { regex: "/memory.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
  `

  export default HeaderImg