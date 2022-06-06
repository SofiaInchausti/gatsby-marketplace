import * as React from "react"
import { graphql} from "gatsby"
import { Layout, Seo, Products, Jumbo } from "../components"

export const query = graphql `
query GET_DATA {
   allSite{
    edges{
      node{
        siteMetadata{
          description
        }
      }
    }
  }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            active
            name
            images
            metadata{
              flavor
              item_form
              limited
              label
              roast_level
            }
          }
        }
      }
    }
}
`

const IndexPage = ({data}) => {
return(
    <Layout>
    <Seo title="" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Products products={data.allStripePrice.edges}/>
    </Layout>
  )
}

export default IndexPage
