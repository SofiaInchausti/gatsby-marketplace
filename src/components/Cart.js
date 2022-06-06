import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"


const Cart=()=> {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()
  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
    )
  }
  useEffect(() => {
    setStripe(
        window.Stripe(`${process.env.STRIPE_PK}`)
      )
    getTotal()
  }, [])
  const handleSubmit = async e => {
    e.preventDefault()
    let prod = cart.map(({ id, quantity }) => ({ price: id, quantity: quantity }))
    const { error } = await stripe.redirectToCheckout({
      lineItems: prod,
      mode: 'payment',
      successUrl: 'https://starbuckscoffeeshop.netlify.app/thanks',
      cancelUrl:'https://starbuckscoffeeshop.netlify.app/cancel',
    })
    if (error) {
      throw error
    }
  }
  return (
    <StyledCart>
      <h2>Shopping Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.images} alt={product.name} /> {product.name}
              </td>
              <td>USD {priceFormat(product.unit_amount)}</td>
              <td>Unit {product.quantity}</td>
              <td>{priceFormat(product.quantity * product.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={cart.length === 0}>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
export default Cart