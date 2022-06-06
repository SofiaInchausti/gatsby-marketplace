import React from "react";
import { Link } from "gatsby";
import priceFormat from "../utils/priceFormat";
import { StyledProducts } from "../styles/components";

const Products=({ products })=> {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount)
          return (
            node.product.active && (
              <article key={node.id}>
                <img src={node.product.images} alt={node.product.name} />
                {node.product?.metadata?.label &&
                  <small>{node?.product?.metadata?.label}</small>
                }
                <p>{node.product.name}</p>
                <small>USD {price}</small>
                <div>
                  <Link to={`/${node.id}`}>
                    Buy now <span>→</span>
                  </Link>
                </div>
              </article>
            )
          )
        }
        )
        }
      </section>
    </StyledProducts>
  )
}

export default Products