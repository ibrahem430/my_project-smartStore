import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <div className="header1">
      <div className="header2">
        <div className="List">
          <div>
            <p className="logo">TechSmart</p> 
          </div>
          
          <div>
            <ul className="List2">
              <li onClick={() => setActiveNav("shop")}>
                <Link to="/">Shop</Link>
                {activeNav === "shop" && <hr />}
              </li>
              <li onClick={() => setActiveNav("contact")}>
                <Link to="/contact">Contact</Link>
                {activeNav === "contact" && <hr />}
              </li>
              <li onClick={() => setActiveNav("about")}>
                <Link to="/about">About</Link>
                {activeNav === "about" && <hr />}
              </li>
              <li onClick={() => setActiveNav("login")}>
                <Link to="/login">Login</Link>
                 {activeNav === "login" && <hr />}
              </li>
              <li onClick={() => setActiveNav("register")}>
                <Link to="/register">Register</Link>
                 {activeNav === "register" && <hr />}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="cart-container">
        <Link className='cartLink' to="/cart">
          <img 
            className="cart" 
            src="https://www.freeiconspng.com/uploads/cart-icon-16.png" 
            alt="Shopping Cart" 
          />
          <div className="nav-cart-count">0</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;