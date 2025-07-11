import React from 'react'
import facebook from "../Assets/photoOfContact/2023_Facebook_icon.svg"
import instagram from "../Assets/photoOfContact/Instagram_logo_2022.svg"
import  x from"../Assets/photoOfContact/x-logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() { 
    //footer of the page
    const currentYear = new Date().getFullYear();
  return (
   
    <div className='footer'>
        
        <div  className='footer-logo'><Link to="/" ><h1 onClick={() => window.scrollTo(0, 0)} >TechSmart</h1></Link></div>
       <ul className='theFooter-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices </li>
       <Link style={{textDecoration:"none" , color:"white"}} to="/about" onClick={() => window.scrollTo(0, 0)} ><li>About</li></Link> 
       <Link style={{textDecoration:"none" , color:"white"}} to="/contact" onClick={() => window.scrollTo(0, 0)} ><li>Contact</li></Link> 
       </ul>
       <div className='theIMgFlex'>
        <img className='theImg2-footer' src={facebook} alt="facebook" />
        <img className='theImg2-footer' src={instagram} alt="instagram" />
        <img className='theImg2-footer' src={x} alt="x" />

       </div>
        <div className='copyright'>  <p>Copyright ⓒ {currentYear}</p></div>
  </div> )
}

export default Footer