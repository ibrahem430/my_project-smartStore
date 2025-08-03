import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./AllProduct.css"
import {  Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



function AllProduct() {
   const [data,setdata]=useState([]);
   const[id,setid]=useState('');
   const[offer,setoffer]=useState('');
   const[isnew,setisnew]=useState('');
   const[new_price,setnewprice]=useState('');

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
 function handelupdate(e){
  e.preventDefault();
  fetch(`http://localhost:5000/updateproduct`, {
    method:'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      offer: offer,
      isnew: isnew,
      new_price: new_price
    })
  })
  .then((res)=>res.text())
  .then((msg)=>alert("Updated successfully"))
  .catch((err)=>console.log("err", err))
}

 

const navigate = useNavigate();

  const userId = localStorage.getItem('idAdmin');

  useEffect(() => {
    if (userId!=1) {
   Swal.fire({
  title: 'Warning!',
  text: 'Please login first!',
  icon: 'warning',
  confirmButtonColor: 'green',
});
      navigate('/');
      return;
    }})

     return (<div>  
         <div className='update-product'>
            <h2 style={{fontSize:"35px", textAlign:"center", margin:"0px", marginBottom:"3px",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>Update Product</h2>
            <form>
          <label htmlFor='id' style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}} > Id</label>
          <br />
           <input placeholder='Id' type='text' value={id} onChange={(e)=>setid(e.target.value)}  />
           <br />
           <br />
            <label  style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}} htmlFor='isnew' > New</label>
            <br />
           <input placeholder='Is New' type='text' value={isnew} onChange={(e)=>setisnew(e.target.value)}  />
           <br />
           <br />
            <label  style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}} htmlFor='offer' > Offer</label>
            <br />
           <input placeholder='Offer' type='text' value={offer} onChange={(e)=>setoffer(e.target.value)}  />
           <br />
           <br />
             <label  style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}} htmlFor='new_price' >  New Price</label>
            <br />
           <input placeholder='New Price' type='text' value={new_price} onChange={(e)=>setnewprice(e.target.value)}  />
            <br />
            <br />
            <button className='thebuttonOfUpdateProduct' onClick={handelupdate}>Update Product</button>
          </form>
          
          </div>
          <div><h1 style={{fontSize:"50px" ,textAlign:"center" ,fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>All Product</h1></div>
     <div className='thepageofitem'>
        
 {data.map((item, index) => (
 
  <div key={index} className="theElement">
                                <img style={{height:"200px" ,width:"250px"}} src={`http://localhost:5000/image/${item.image}`}  alt="" />

  {item.id && <div style={{textDecoration:"none", color:"black", fontWeight:"700"}} >id: {item.id}</div>}
<Link style={{textDecoration:"none", color:"black", fontWeight:"700"}} to={`/pageOfitem/${item.id}`}>{item.name && <div>name: {item.name}</div>}</Link> 
{/* {item.category && <div style={{textDecoration:"none", color:"red", fontWeight:"700" }}>category: {item.category}</div>} */}
{/* {item.image && <div>image: {item.image}</div>} */}
{item.new_price && <div style={{textDecoration:"none", color:"red", fontWeight:"700"}}>new_price: {item.new_price}</div>}
{item.old_price && <div style={{textDecoration:"none", color:"red", fontWeight:"700"}}>old_price: {item.old_price}</div>}
{/* {item.processorgeneration && <div>processorgeneration: {item.processorgeneration}</div>}
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
{item.keyboard && <div>keyboard: {item.keyboard}</div>} */}
{item.type && <div style={{textDecoration:"none", color:"red", fontWeight:"700"}}>type: {item.type}</div>}
{/* {item.offer && <div>offer: {item.offer}</div>}
{ item.isnew &&<div>new: {item.isnew}</div>} */}
{/* {item.ports && <div>ports: {item.ports}</div>}
{item.contrastratio && <div>contrastratio: {item.contrastratio}</div>}
{item.responsetime && <div>responsetime: {item.responsetime}</div>}
{item.signalfrequency && <div>signalfrequency: {item.signalfrequency}</div>}
{item.coolingsystemmodel && <div>coolingsystemmodel: {item.coolingsystemmodel}</div>}
{item.casemodel && <div>casemodel: {item.casemodel}</div>}
{item.lighttype && <div>lighttype: {item.lighttype}</div>}
{item.powersupply && <div>powersupply: {item.powersupply}</div>}
{item.keyboardfeatures && <div>keyboardfeatures: {item.keyboardfeatures}</div>}




{item.opticaldrive && <div>opticaldrive: {item.opticaldrive}</div>}
{item.camera && <div>camera: {item.camera}</div>}
{item.audio && <div>audio: {item.audio}</div>}
{item.fingerprint && <div>fingerprint: {item.fingerprint}</div>}
{item.operationsystem && <div>operationsystem: {item.operationsystem}</div>}
{item.batterynumberofcells && <div>batterynumberofcells: {item.batterynumberofcells}</div>}
{item.networking && <div>networking: {item.networking}</div>}
{item.warranty && <div>warranty: {item.warranty}</div>}
{item.weightanddimensions && <div>weightanddimensions: {item.weightanddimensions}</div>}
{item.touchscreen && <div>touchscreen: {item.touchscreen}</div>} */}

     <button onClick={()=>handldelete(item)} className='deleteitem'>delete item</button>
  </div>
))}

 </div></div>
  )}


export default AllProduct
// {/* 
//     {Object.entries(item).map(([key, value]) => (
//       <div key={key}>
//         <strong>{key}:</strong> {value} 

//       </div>   
              

//     ))}  */}