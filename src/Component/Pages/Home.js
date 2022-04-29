import React, { useEffect } from 'react'
import ProductCard from '../Product/ProductCard'

const Home = ({  setOpenLogin, userName }) => {

  useEffect(()=> {
    if(!userName) {
      setOpenLogin(true)
    } 
    else {
      setOpenLogin(false)
    }
  },[])

  // useEffect(async () => {
  //   const url = "https://fakestoreapi.com/products"
  //   const response = await fetch(url)
  //   console.log("response--",response)
  // },[])

  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default Home