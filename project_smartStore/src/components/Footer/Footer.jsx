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
   <div>
    <div className='footer'>
          
     <div className='theFooter-link' >
     <div  className='footer-logo'><Link to="/" ><h1 onClick={() => window.scrollTo(0, 0)} >TechSmart</h1></Link></div>
     <Link style={{textDecoration:"none" , color:"white"}} to="/about" onClick={() => window.scrollTo(0, 0)} ><li>About</li></Link> 
       <Link style={{textDecoration:"none" , color:"white"}} to="/contact" onClick={() => window.scrollTo(0, 0)} ><li>Contact</li></Link> 
     </div>
     <div>
       <div className="hero-prodect-footer">
                  
                  <div className='size-prodect-footer'>
                    
                   <Link to="/pcs">  <h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>PCs</h2></Link>
                  </div>
                  <div className='size-prodect-footer'>
                 
                   <Link to="/Laptop"><h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Laptops</h2></Link>
                  </div>
               <div className='size-prodect-footer'>
                 
                  <Link to="/gaming"> <h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Gaming </h2></Link>
                 </div>
                 <div className='size-prodect-footer'>
                  
                   <Link to="/keyboards">    <h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Keyboards</h2></Link>
                 </div>
                 <div className='size-prodect-footer'> 
                  
                   <Link to="/mouse" >  <h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Mouses</h2></Link> 
                 </div>
                 <div className='size-prodect-footer'>
                    
                    <Link to="/headphones">   <h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Headset</h2></Link> 
                 </div>
                 {/* <div className='size-prodect-footer'>
                  
                  <Link to="/monitor" ><h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Monitors</h2></Link> 
                 </div>
                 <div className='size-prodect-footer'>
                 
                  <Link to="/charges"><h2 onClick={() => window.scrollTo(0, 0)} className='thetext-footer'>Chargers</h2></Link> 
                 </div> */}
                  </div>  
     </div>
     <div><div className='theIMgFlex'>
      <div className='img-and-text-socialmedia'> <img className='theImg2-footer' src={facebook} alt="facebook" />
      <h3 style={{color:'#4267B2'}}>Facebook</h3> </div> 
       <div  className='img-and-text-socialmedia'><img className='theImg2-footer' src={instagram} alt="instagram" />
       <h3 className='gradient'>Instegram</h3>
       </div> 
        <div  className='img-and-text-socialmedia'><img className='theImg2-footer' src={x} alt="x" />
        {/* <h3>X</h3> */}
        </div>

       </div></div>

        
    
       
     
  </div>

  
       <div className='copyright'>  <p>Copyright ⓒ {currentYear}</p></div>
  </div>
   )
}

export default Footer