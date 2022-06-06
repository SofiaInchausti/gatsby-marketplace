
   
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_SKUS {
      allStripePrice {
        edges {
          node {
            id
            unit_amount
            product {
              name
              images
              description
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
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context:node,
    })
  })
}