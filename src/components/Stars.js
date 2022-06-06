import React, { useState } from "react"
import { SelectStars } from "../styles/components"

const Stars=()=> {
  const [stars, setStars] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span role = "button" onClick={() => setStars(1)}>★</span>
      <span role = "button" onClick={() => setStars(2)}>★</span>
      <span role = "button" onClick={() => setStars(3)}>★</span>
      <span role = "button" onClick={() => setStars(4)}>★</span>
      <span role = "button" onClick={() => setStars(5)}>★</span>
    </SelectStars>
  )
}

export default Stars