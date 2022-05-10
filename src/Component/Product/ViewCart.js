import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PriceDetails from "./PriceDetails"
import ProductInCart from "./ProductInCart"

const ViewCart = () => {
  const [productInCart, setProductInCart] = useState(
    JSON.parse(localStorage.getItem("product_in_cart")) || []
  )
  const params = useParams()
  const productId = params.id
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    addProductInStorage(productInCart)
    setTotalPrice(allPrice())
  }, [productInCart])

  // add cart data in local storage
  const addProductInStorage = (data) => {
    localStorage.setItem("product_in_cart", JSON.stringify(data))
  }

  //remove product from cart
  const remove = (id) => {
    alert("remove " + id)
    const afterRemove = productInCart.filter((item) => {
      if (id === item.id) {
        return false
      }
      return true
    })
    setProductInCart(afterRemove)
  }

  // function for calculate total price
  const allPrice = () => {
    let total = 0
    productInCart.forEach((item) => {
      total += item.price * item.quantity
    })
    return total
  }

  const changeItemQuantity = (productId, quantity) => {
    updateProductQuantity(productId, quantity)
  }

  //update quantity of product
  const updateProductQuantity = (productId, quantity) => {
    const filterData = productInCart.map((item) => {
      if (productId === item.id) {
        return { ...item, quantity: quantity }
      } else {
        return { ...item }
      }
    })
    setProductInCart(filterData)
  }

  return (
    <>
      {productInCart.map((item) => {
        return (
          <>
            <ProductInCart
              item={item}
              remove={remove}
              itemsInCart={productInCart}
              changeItemQuantity={changeItemQuantity}
            />
          </>
        )
      })}
      <PriceDetails
        itemsInCart={productInCart.length}
        totalPrice={totalPrice}
      />
    </>
  )
}

export default ViewCart
