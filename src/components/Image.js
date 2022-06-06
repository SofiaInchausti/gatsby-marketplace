import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image({ name }) {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />
    }
    />
  )
}
