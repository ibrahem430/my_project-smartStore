import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
// import { gitcount2 } from '../../page/Cart';
// function gitcount(){
//   return cartCount;
// }
// import { getcount } from '../Counter/Counter';
function Navbar({count}) {
  const [activeNav, setActiveNav] = useState("");
const [cartCount, setCartCount] = useState(0);
 const nav= useNavigate()
  useEffect(() => {
  fetch('http://localhost:5000/cart-count')
    .then(res => res.json())
    .then(data => setCartCount(data.count))
    .catch(err => console.error(err));
}, []);


  return (
    <div className="header1">
      <div className="header2">
        <div className="List">
          <div>
           <Link style={{textDecoration:"none"}} to="/" ><p onClick={() => setActiveNav("shop")} className="logo">TechSmart</p> </Link>  
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
          <div className="nav-cart-count">{cartCount}</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
