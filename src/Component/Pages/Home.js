import React, { useState, useEffect } from 'react'
import ProductCard from '../Product/ProductCard'
import { CardParent } from '../Product/ProductCardStyle'

const Home = ({ setOpenLogin, userName }) => {
  const [products, setProducts] = useState([])
  const [productInCart, setProductInCart] = useState(JSON.parse(localStorage.getItem('product_in_cart')) || [])

  // get product data from dummy api
  useEffect(() => {
    const getProducts = async () => {
      const url = "https://fakestoreapi.com/products"
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  // add item in cart (local storage)
  useEffect(() => {
    addProductInStorage(productInCart)
  },[productInCart])

  //add to cart function
  const addToCart = (item) => {
    item["quantity"]= 1
    setProductInCart([...productInCart, item])
  }

  // add cart data in local storage
  const addProductInStorage = (data) => {
    localStorage.setItem('product_in_cart', JSON.stringify(data))
  }

  useEffect(() => {
    if (!userName) {
      setOpenLogin(true)
    }
    else {
      setOpenLogin(false)
    }
  }, [])

  if (!products || !products.length) {
    return(
    <div>
      <p>Loading...</p>
    </div>
    )
  }

  return (
    <CardParent className='flex'>
      {
        products.map((item) => (
          <ProductCard key={item.id}
            item={item}
            addToCart={addToCart}
            productInCart={productInCart}
          />
        ))
      }
    </CardParent>
  )
}

export default Home