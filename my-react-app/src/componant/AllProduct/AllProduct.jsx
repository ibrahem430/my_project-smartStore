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
 

 const[isnew,setisnew]=useState('')
 
     return (<div className='thepageofitem'>
 {data.map((item, index) => (

  <div key={index} className="theElement">
                                <img style={{height:"200px" ,width:"250px"}} src={`http://localhost:5000/image/${item.image}`}  alt="" />

   {item.id && <div>id: {item.id}</div>}
{item.name && <div>name: {item.name}</div>}
{item.category && <div>category: {item.category}</div>}
{item.image && <div>image: {item.image}</div>}
{item.new_price && <div>new_price: {item.new_price}</div>}
{item.old_price && <div>old_price: {item.old_price}</div>}
{item.processorgeneration && <div>processorgeneration: {item.processorgeneration}</div>}
{item.processorfamily && <div>processorfamily: {item.processorfamily}</div>}
{item.processorspeed && <div>processorspeed: {item.processorspeed}</div>}
{item.processorcache && <div>processorcache: {item.processorcache}</div>}
{item.numberofcores && <div>numberofcores: {item.numberofcores}</div>}
{item.ramcapacity && <div>ramcapacity: {item.ramcapacity}</div>}
{item.memorytype && <div>memorytype: {item.memorytype}</div>}
{item.storagecapacity && <div>storagecapacity: {item.storagecapacity}</div>}
{item.storagetype && <div>storagetype: {item.storagetype}</div>}
{item.graphicmanufacturer && <div>graphicmanufacturer: {item.graphicmanufacturer}</div>}
{item.graphicmodel && <div>graphicmodel: {item.graphicmodel}</div>}
{item.boostclock && <div>boostclock: {item.boostclock}</div>}
{item.tgp && <div>tgp: {item.tgp}</div>}
{item.graphicmemory && <div>graphicmemory: {item.graphicmemory}</div>}
{item.graphicmemorytype && <div>graphicmemorytype: {item.graphicmemorytype}</div>}
{item.graphicmemorysource && <div>graphicmemorysource: {item.graphicmemorysource}</div>}
{item.displaysize && <div>displaysize: {item.displaysize}</div>}
{item.displaytechnology && <div>displaytechnology: {item.displaytechnology}</div>}
{item.displayresolution && <div>displayresolution: {item.displayresolution}</div>}
{item.keyboard && <div>keyboard: {item.keyboard}</div>}
{item.type && <div>type: {item.type}</div>}
{item.offer && <div>offer: {item.offer}</div>}
<div>new: {item.isnew}</div>
<input type="text" value={isnew} onChange={(e)=>setisnew(e.target.value)} />
<button>change</button>
{item.ports && <div>ports: {item.ports}</div>}
{item.contrastratio && <div>contrastratio: {item.contrastratio}</div>}
{item.responsetime && <div>responsetime: {item.responsetime}</div>}
{item.signalfrequency && <div>signalfrequency: {item.signalfrequency}</div>}
{item.coolingsystemmodel && <div>coolingsystemmodel: {item.coolingsystemmodel}</div>}
{item.casemodel && <div>casemodel: {item.casemodel}</div>}
{item.lighttype && <div>lighttype: {item.lighttype}</div>}
{item.powersupply && <div>powersupply: {item.powersupply}</div>}
{item.keyboardfeatures && <div>keyboardfeatures: {item.keyboardfeatures}</div>}

     <button onClick={()=>handldelete(item)} className='deleteitem'>delete item</button>
  </div>
))}

 </div>
  )}


export default AllProduct
// {/* 
//     {Object.entries(item).map(([key, value]) => (
//       <div key={key}>
//         <strong>{key}:</strong> {value} 

//       </div>   
              

//     ))}  */}