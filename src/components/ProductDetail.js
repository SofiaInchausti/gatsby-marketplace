import React, { useContext } from "react"
import { useState } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import Seo  from "./Seo"
import Stars from "./Stars"
import { CartContext } from "../context"
import Layout from "./Layout"


const ProductDetail = ({ id, product: { name, images, metadata, description }, unit_amount, product }
) => {
  const { addToCart } = useContext(CartContext)
  const formatePrice = priceFormat(unit_amount)
  const [qty, setQty] = useState(1);
  const handleSubmit = () => {
    addToCart({ unit_amount, id, name, quantity: qty, images })
  }
  return (
    <Layout>
      <StyledProductDetail>
        <Seo title={name} />
        <img src={images} alt={name} />
        <div>
          {metadata.limited ?
            <Tag className="limited">Limited Edition</Tag> :
            <Tag>Popular</Tag>
          }
          <h2>{name}</h2>
          <p>{description}</p>
          <b>USD {formatePrice}</b>
          <Stars />
          {
            metadata &&
            <div className="details">
              <small>Flavor: {metadata.flavor}</small>
              <small>Roast Level: {metadata.roast_level}</small>
              <small>Item Form: {metadata.item_form}</small>
            </div>
          }
          <p>Cantidad:</p>
          <QtySelect>
            <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
            <input type="text" disabled value={qty} />
            <button onClick={() => setQty(qty + 1)}>+</button>
          </QtySelect>
          <Button onClick={handleSubmit}>Agregar al carrito</Button>
        </div>
      </StyledProductDetail>
    </Layout>
  )
}

export default ProductDetail