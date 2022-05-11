import React, { useEffect, useState } from "react"
import LogIn from "./Forms/LogIn"
import SignUp from "./Forms/SignUp"
import Navbar from "./NavBar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Protected from "./Pages/Protected"
import ViewCart from "./Product/ViewCart"

const Wrapper = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  )
  const [userName, setUserName] = useState("")
  const [role, setRole] = useState("")
  const [isCart, setIsCart] = useState(false)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData))
  }, [userData])

  return (
    <>
      {openLogin ? (
        <LogIn
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignUp}
          userData={userData}
          userName={userName}
          setUserName={setUserName}
          setRole={setRole}
        />
      ) : (
        ""
      )}
      {openSignUp ? (
        <SignUp
          setOpenSignUp={setOpenSignUp}
          setUserData={setUserData}
          userData={userData}
        />
      ) : (
        ""
      )}
      {
        <>
          <Navbar
            setOpenLogin={setOpenLogin}
            userName={userName}
            setUserName={setUserName}
            role={role}
            setIsCart={setIsCart}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Protected
                  Component={Home}
                  userName={userName}
                  setOpenLogin={setOpenLogin}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Protected
                  Component={Home}
                  userName={userName}
                  setOpenLogin={setOpenLogin}
                />
              }
            />
            <Route
              path="/shop"
              element={<Protected Component={Shop} userName={userName} />}
            />
            <Route
              path="/blog"
              element={<Protected Component={Blog} userName={userName} />}
            />
            <Route
              path="/about"
              element={<Protected Component={About} userName={userName} />}
            />
            <Route
              path="/contact"
              element={<Protected Component={Contact} userName={userName} />}
            />
            <Route path="/viewcart" element={<ViewCart />} />
            <Route path="*" element={<p>sorry no page</p>} />
          </Routes>
        </>
      }
    </>
  )
}

export default Wrapper
