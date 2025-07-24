import React from 'react'
import { useState } from 'react'
import "./AddProduct.css"

function AddProduct() {
    const [id ,setid]=useState('');
    const [name ,setname]=useState('');
    const [category ,setcategory]=useState('');
    const [image ,setimage]=useState('');
    const [new_price ,setnewprice]=useState('');
        const [old_price ,setOldprice]=useState('');
        const[processorgeneration,setprocessorgeneration]=useState('');
        const[processorfamily,setprocessorfamily]=useState('');
        const[processorspeed,setprocessorspeed]=useState('')

function handelchange(){
  fetch("http://localhost:5000/add-to-product",{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
          id: id,
          name: name,
          category: category,
          image: image,
          new_price: new_price,
          old_price:old_price,
          processorgeneration:processorgeneration,
          processorfamily:processorfamily,
          processorspeed:processorspeed




        }),
  })
  .then((res)=>res.text())
  .then(()=>alert("add a new product"))
  .catch((err)=> console.log(err))
}


  return (
    <div className='thepage'>
    <div className='theaddproduct'>
        <form>
        <label htmlFor="id">Id </label>
        <br />
        <input type="text" value={id} onChange={ (e)=> setid(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="name">Name </label>
        <br />
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  />
        <br/>
          <br/>
        <label htmlFor="category">category </label>
        <br />
        <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="image">Imge </label>
        <br />
        <input type="text" value={image} onChange={(e)=>setimage(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="newprice">New Price</label>
        <br />
        <input type="text" value={new_price} onChange={(e)=>setnewprice(e.target.value)} />
          <br/>
            <br/>
        <label htmlFor="oldprice">Old price</label>
        <br />
        <input type="text" value={old_price} onChange={(e)=>setOldprice(e.target.value)} />
          <br/>
            <br/>
      <label htmlFor="">Processor Generation</label>
      <br />
        <input type="text"  value={processorgeneration} onChange={(e)=>setprocessorgeneration(e.target.value)}/>
          <br/>
        <label htmlFor="">Processor Family</label>
        <br />
        <input type="text" value={processorfamily} onChange={(e)=>setprocessorfamily(e.target.value)} />
        <br></br>
        <br />
          <label htmlFor="">Processor Speed</label>
        <br />
        <input type="text" value={processorspeed} onChange={(e)=>setprocessorspeed(e.target.value)} />
        <br></br>
        
          <button onClick={handelchange}>Add Product</button>
        </form>
    </div></div>
  )
}

export default AddProduct

