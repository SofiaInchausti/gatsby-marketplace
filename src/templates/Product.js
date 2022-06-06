import React from "react"
import  ProductDetail from "../components/ProductDetail"

export default function Product({pageContext}) {
  return(
   <ProductDetail {...pageContext}/>
  )
}