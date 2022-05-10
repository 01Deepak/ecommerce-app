import React from "react"
import { Wrapper } from "./PriceDetailsStyle"

const PriceDetails = ({ itemsInCart, totalPrice }) => {
  return (
    <Wrapper className="pricedetails">
      <h3>PRICE DETAILS</h3>
      <hr />
      <div>
        <p>Price ({itemsInCart} item)</p>
      </div>
      <hr />
      <div>
        <p>Total Amount</p>
        <p>{totalPrice.toFixed(2)}</p>
      </div>
      <button>PLACE ORDER</button>
    </Wrapper>
  )
}

export default PriceDetails
