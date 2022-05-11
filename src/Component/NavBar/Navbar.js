import React, { useEffect, useState } from 'react'
import { Nav, Header, Container, IconDiv } from '../../Style/NavbarStylel'
import { ReactComponent as FacebookIcon } from '../../Images/icons/facebook-f-brands.svg'
import { ReactComponent as TwitterIcon } from '../../Images/icons/twitter-brands.svg'
import { ReactComponent as LinkedInIcon } from '../../Images/icons/linkedin-in-brands.svg'
import { Link, Outlet } from 'react-router-dom'

const Navbar = ({ setOpenLogin, setOpenSignUp, userName, setUserName, role, setIsCart}) => {

  return (
    <Container>
      <Header>
        <IconDiv>
          <span> <FacebookIcon height={15} /> </span>
          <span> <TwitterIcon height={15} /> </span>
          <span> <LinkedInIcon height={15} /> </span>

        </IconDiv>
        <div>
          Mon - Fri : 9am to 5pm / +88012345678 / fultalashop@gmail.com
        </div>
      </Header>
      <hr />
      <Nav>
        <div>
          brand
        </div>
        <ul>
          <li>
            <Link to="/home"> HOME </Link>
          </li>
          {
            userName && role === 'admin' ?
              <>
                <li>
                  <Link to="/shop"> SHOP </Link>
                </li>
                <li>
                  <Link to="/blog"> BLOG </Link>
                </li>
                <li>
                  <Link to="/about"> ABOUT </Link>
                </li>
                <li>
                  <Link to="/contact"> CONTACT </Link>
                </li>
              </>
              : 
              userName && role === 'user' ?
              <>
              <li>
              <Link to="/shop"> SHOP </Link>
            </li>
            <li>
              <Link to="/blog"> BLOG </Link>
            </li>
              </>
              : ''
          }
        </ul>
        <div>
          {
            userName ?
              <>
                <span>Hello {userName}</span>
                <span onClick={() => setUserName(null)}>Log out</span>
              </>
              :
              <span onClick={() => setOpenLogin(true)}>LogIn</span>
          }
           <span><Link to="/viewcart"> Cart </Link></span>
        </div>
      </Nav>
    </Container>
  )
}

export default Navbar