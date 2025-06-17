import React from "react";
import "./Header.css";

// import express from "express"
function Header() {
  return (
    <div className="header1">
    <div className="header2">
 <div className="List">
 <div><p className="logo" >TechSmart</p> </div>
   
<div >
<div className="List2">
{/* <li className="size">Home</li>
<li className="size">Contact</li>
<li className="size">About</li>
<li className="size">Login</li>
<li className="size">Register  </li> */}
<button  className="size">Home</button>
<button  className="size">Contact</button>
<button  className="size">About</button>
<button  className="size">Login</button>
<button  className="size">Register</button>

</div>
</div>
</div>
   </div>
   </div>
  );
}

export default Header;
