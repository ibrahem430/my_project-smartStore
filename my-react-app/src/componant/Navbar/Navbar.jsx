import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
     
    
  return (
   <div className='backGroundOfEleament'>
    <div className='theelement'>
     
          <Link to="/addproduct"><li>Add Product</li></Link>  
          <Link to="/allproduct"><li>All Product</li></Link>   
          <Link to="/">  <li style={{fontSize:"200%" ,color:"rgb(121, 0, 0)" ,fontWeight:"1000"}}>TechSmart</li></Link>
            <Link to="/alluser"><li>All User</li></Link>
           <Link to="/allcart"> <li>All Cart</li></Link> 
       
    </div>
   </div>
  )
}

export default Navbar