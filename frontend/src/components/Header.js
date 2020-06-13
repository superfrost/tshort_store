import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  
  const openSideBar = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  return (
    <header className="header">
      <div className="brand">
        <button onClick={openSideBar}>&#9776;</button>
        <Link to="/">T-short shop</Link>
      </div>
      <div className="header-links">
        <Link to="/signIn" >Sign In</Link>
        <Link to="/cart" >Cart</Link>
        {/* <img src="./svg/cart.svg" /> */}
      </div>
    </header>
  )
}
