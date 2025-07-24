import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./AllProduct.css"
function AllProduct() {
   const [data,setdata]=useState([]);
   useEffect(()=>{
  fetch("http://localhost:5000/allproduct")
  .then((res)=>res.json())
  .then(data=>setdata(data))
  .catch((err)=>alert(err))
  },[])
   
  function handldelete(item){
     
  fetch(`http://localhost:5000/deleteProduct/${item.id}`,{
     method:'Delete' })
     .then((res)=>{
        if(!res.ok){
             console.log("delete felid")
        }else{
        console.log("the delete is ok")
       setdata( (prevdata) => prevdata.filter((i)=>i.id !==item.id))}
  

    })
     .catch((err)=>console.log("err"))
    
 
 }
 
     return (<div className='thepageofitem'>
 {data.map((item, index) => (

  <div key={index} className="theElement">
                                <img style={{height:"200px" ,width:"250px"}} src={`http://localhost:5000/image/${item.image}`}  alt="" />

    {Object.entries(item).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong> {value} 

      </div>   
              

    ))}  <button onClick={()=>handldelete(item)} className='deleteitem'>delete item</button>
  </div>
))}

 </div>
  )}


export default AllProduct