import React, { useState, useEffect } from 'react';
// import img from "./img2.png"
import"./Advertisement.css"
function Advertisement2() {

    const [data, setData] = useState([]);
  
        useEffect(() => {
          fetch("http://localhost:5000/advertisements")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err));
        }, []);
 
const product = data.find((item) => item.id === 1); 

if (product){
return (

    <div className='background'>
    <div className='theDiv'>
      <img className='theImg' src={`http://localhost:5000/image/${product.img}`} alt=""/>
   
   </div>
   <br/>
    <br/>
     <br/>
      <br/>
       <br/>
        <br/> 
        <br/>
   
   </div>
  );}
  else return null;
}

export default Advertisement2