import React, { useState } from "react"

const QuantityCounter = ({ increaseQuantity, decreseQuantity, quantity }) => {
  const increment = () => {
    increaseQuantity()
  }

  const decrement = () => {
    decreseQuantity()
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <input type="text" value={quantity} />
      <button onClick={decrement}>-</button>
    </>
  )
}

export default QuantityCounter
