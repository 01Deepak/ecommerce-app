import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Image, Card } from "./ProductCardStyle"

const ProductCard = ({ item, addToCart, productInCart }) => {
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (productInCart) {
      productInCart.forEach((product) => {
        if (product.id === item.id) {
          setAlreadyAdded(true)
        }
      })
    }
  }, [productInCart])

  return (
    <Card className="card">
      <div>
        <Image src={item.image} alt="img" />
      </div>
      <div>
        {item.title} <br />
        {item.price}
      </div>
      <div>
        {alreadyAdded ? (
          <button onClick={() => navigate("/viewcart")}>Show In Cart</button>
        ) : (
          <button onClick={() => addToCart(item)}>Add to cart</button>
        )}
      </div>
    </Card>
  )
}

export default ProductCard
