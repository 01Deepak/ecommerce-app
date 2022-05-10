import React, { useEffect, useState } from "react"
import { Wrapper, Image, ImageDiv, ParentDiv } from "./ProductInCartStyle"
import QuantityCounter from "./QuantityCounter"
import PriceDetails from "./PriceDetails"

const ProductInCart = ({ item, remove, itemsInCart, changeItemQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity)
  console.log("item-- ", item)

  //set item quantity
  useEffect(() => {
    changeItemQuantity(item.id, quantity)
  }, [quantity])

  //increse quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  //decrese quantity
  const decreseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    } else {
      alert("quantity must be at least 1.")
    }
  }

  return (
    <ParentDiv>
      <Wrapper className="cart">
        <ImageDiv>
          <Image src={item.image} alt="product image" />
        </ImageDiv>
        <div>
          <p>{item.title}</p>
          <p>{(item.price * item.quantity).toFixed(2)}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.category.rate}</p>
          <div>
            <QuantityCounter
              quantity={item.quantity}
              increaseQuantity={increaseQuantity}
              decreseQuantity={decreseQuantity}
              changeItemQuantity={changeItemQuantity}
            />
            <button
              onClick={() => remove(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        </div>
      </Wrapper>
      <hr />
    </ParentDiv>
  )
}

export default ProductInCart
