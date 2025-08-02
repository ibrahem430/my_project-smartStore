import React from 'react'



function About() {


   const  thepacge={
    marginLeft:"15%",
     marginRight:"15%",
     fontSize:"25px",
     hight: "120%%",
     width:"70%",
     border:"none",
     backgroundColor:"rgb(246, 246, 246)",
     
   }
 const theFontFamily = {
    fontFamily: "'Times New Roman', serif",
    fontWeight: 600,// or "normal"
    margin:"4%"
   };
const background={
     backgroundImage: "url('https://example.com/your-image.jpg')",

}
  return (
    <div style={background}>
    <div style={thepacge}>
     
        <h1 style={{margin:"1%" ,textAlign:"center"}}>About</h1>
        <p style={theFontFamily}><span style={{color:"rgb(173, 12, 12)", fontSize:"30px"}}>TechSmart</span> is a smart online store specialized in selling electronic equipment such as computers, laptops, monitors, headphones, keyboards, mice, and chargers.<br/><br/>

         Our goal is to provide the best and smoothest shopping experience for our users — one that is fast, simple, and secure. We focus on meeting customer needs in an intelligent and efficient way.<br/> <br/>

        What makes TechSmart unique is the use of artificial intelligence to deliver personalized product recommendations, a smart assistant to help users search for items easily, and predictive analytics to improve our services and ensure product availability.<br/> <br/>

        We are constantly working to develop and improve our platform to meet user expectations and deliver a modern, high-quality digital shopping experience</p>
    <div  style={{marginBottom:"5%"}}></div>
    </div>
 
    </div> )
    }

    export default About