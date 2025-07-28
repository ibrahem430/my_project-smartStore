import React from 'react'
import { Link } from "react-router-dom";
import laptop_gaming from "../Assets/gaming-photo/laptop2.webp"
import pc from "../Assets/gaming-photo/pc.jpg"

import keyboardImg from "../Assets/gaming-photo/keyboard.webp"
import headImg from "../Assets/gaming-photo/headset.jpg"
import mouseImg from "../Assets/gaming-photo/mouse.webp"
import monitorImg from "../Assets/gaming-photo/monitor2.avif"
import "./ShopGaming.css"
function ShopGaming(props) {
  return (
   <div className='the-Background-Gaming-page' >
     <div><img style={{width:"100%"}} src={props.banner} alt="" /></div>

      <div className='hero'>
            <h1 style={{textAlign:'center', marginBottom:"5%" ,color:"rgb(132, 0, 110)", fontSize:"40px"}}>Gaming Prodect</h1>
             <div className="gaming-prodect">
                 
                 <div className='size-prodect'  onClick={() => window.scrollTo(0, 0)}>
                   <Link to="/pcs_gaming">  <img className='theSizeOfPhoto' src={pc} alt="" /></Link>
                  <Link to="/pcs_gaming">  <h2 className='thetext'>PCs</h2></Link>
                 </div>
                 <div className='size-prodect'  onClick={() => window.scrollTo(0, 0)}>
                 <Link to="/Laptop_gaming"> <img className='theSizeOfPhoto' src={laptop_gaming} alt="laptop" /></Link>
                  <Link to="/Laptop_gaming"><h2 className='thetext'>Laptops</h2></Link>
                 </div>
                <div className='size-prodect'  onClick={() => window.scrollTo(0, 0)}>
                   <Link to="/keyboards_gaming"> <img className='theSizeOfPhoto' src={keyboardImg} alt="" /></Link> 
                  <Link to="/keyboards_gaming">    <h2 className='thetext'>Keyboards</h2></Link>
                </div>
                <div className='size-prodect' onClick={() => window.scrollTo(0, 0)}> 
                  <Link to="/mouse_gaming" >   <img className='theSizeOfPhoto' src={mouseImg} alt="" /> </Link>
                  <Link to="/mouse_gaming" >  <h2 className='thetext'>Mouses</h2></Link> 
                </div>
                <div className='size-prodect' onClick={() => window.scrollTo(0, 0)}>
                    <Link to="/headphones_gaming">  <img className='theSizeOfPhoto' src={headImg} alt="" /></Link>
                   <Link to="/headphones_gaming">   <h2 className='thetext'>Headset</h2></Link> 
                </div>
                <div className='size-prodect' onClick={() => window.scrollTo(0, 0)}>
                  <Link to="/monitor_gaming"><img className='theSizeOfPhoto' src={monitorImg} alt="" /></Link>
                 <Link to="/monitor_gaming" ><h2 className='thetext'>Monitors</h2></Link> 
                </div>
                 </div> 
                 <div style={{marginBottom:"10%"}}></div> 
             </div>
   </div>

   
  )
}

export default ShopGaming