import React from 'react'
import laptop from "../Assets/hero-photo/laptop.jpeg"
import pcImg from "../Assets/hero-photo/pc.jpeg"
import chargeImg from "../Assets/hero-photo/charge.jpeg"
import gamingImg from "../Assets/hero-photo/gaming.jpeg"
import keyboardImg from "../Assets/hero-photo/keyboard.jpeg"
import headImg from "../Assets/hero-photo/cq5dam.web.1920.1920.jpeg"
import mouseImg from "../Assets/hero-photo/mouse.jpeg"
import monitorImg from "../Assets/hero-photo/monitor.jpeg"
import "./Hero.css"
import { Link } from 'react-router-dom'
// import pg from "pg";

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "2003",
//   port: 5432,
// });


function Hero() {
  return (
    <div style={{}} >
    <div className='hero'>
       <h1 style={{textAlign:'center', marginBottom:"5%" ,color:"rgb(63, 60, 60)"}}>The Products</h1>
        <div className="hero-prodect">
            
            <div className='size-prodect'>
              <Link to="/Pcs">  <img className='theSizeOfPhoto' src={pcImg} alt="" /></Link>
             <Link to="/Pcs">  <h2 className='thetext'>PCs</h2></Link>
            </div>
            <div className='size-prodect'>
            <Link to="laptop"> <img className='theSizeOfPhoto' src={laptop} alt="laptop" /></Link>
             <Link to="laptop"><h2 className='thetext'>Laptops</h2></Link>
            </div>
         <div className='size-prodect'>
             <Link to="gaming" > <img className='theSizeOfPhoto' src={gamingImg} alt="" /></Link>
            <Link to="gaming"> <h2 className='thetext'>Gaming </h2></Link>
           </div>
           <div className='size-prodect'>
              <Link to="keyboards"> <img className='theSizeOfPhoto' src={keyboardImg} alt="" /></Link> 
             <Link to="keyboards">    <h2 className='thetext'>Keyboards</h2></Link>
           </div>
           <div className='size-prodect'> 
             <Link to="mouse" >   <img className='theSizeOfPhoto' src={mouseImg} alt="" /> </Link>
             <Link to="mouse" >  <h2 className='thetext'>Mouses</h2></Link> 
           </div>
           <div className='size-prodect'>
               <Link to="headphones">  <img className='theSizeOfPhoto' src={headImg} alt="" /></Link>
              <Link to="headphones">   <h2 className='thetext'>Headphones</h2></Link> 
           </div>
           <div className='size-prodect'>
             <Link to="monitor"><img className='theSizeOfPhoto' src={monitorImg} alt="" /></Link>
            <Link to="monitor" ><h2 className='thetext'>monitors</h2></Link> 
           </div>
           <div className='size-prodect'>
            <Link to="charges"> <img className='theSizeOfPhoto' src={chargeImg} alt="" /></Link>
            <Link to="charges"><h2 className='thetext'>Chargers</h2></Link> 
           </div>
            </div>  
        </div></div>
  )
}

export default Hero