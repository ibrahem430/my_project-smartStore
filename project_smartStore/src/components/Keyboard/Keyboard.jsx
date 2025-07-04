import React from 'react'
import "../Laptop/Laptop.css"
const Keyboard=(props) =>{
  
    const {product}=props;
    return (
      <div >
        <h3 style={{color:" rgb(86, 86, 86)"}}>Home/Shop/{product.category}/{product.name.substring(7,30)}</h3>
    <div className='thepage33'>
        <h1>{product.name.split(" ")[0]}</h1>
      <div className='the-cover-of-img-and-name-and-price' >
        <div className='img-cover'><img src={`http://localhost:5000/image/${product.image}`} alt="" /></div>
        <div className='cover-of-name-price' >
          <h2 style={{marginLeft:"10%"}}>Type of Product: {product.name.split(" ")[1]}</h2>       
          <h2 className='the-name-of-product' >{product.name}</h2>
          <h2 className='Price'>Price:</h2>
          <h2 className='the-price-of-product'>JOD {product.old_price}</h2>
          <h1>JOD {product.new_price}</h1>
         <div className='the-img-of-veza'><img src="https://gts.jo/image/catalog/gts_theme/gts-payment-options.png" alt="" /></div> 
        <div> <button className='click2'>Add TO Cart</button> </div>
        <button className='whatsapp'><img style={{height:"20px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" alt="" /> Chat With Us In WhatsApp</button>
        </div>
      </div>
  <div style={{marginBottom:"10%"}}></div>








       <div></div>
       <div className='the-part-of-specification '><h3><hr /> Type: {product.type}</h3><hr  /></div>

    </div>
  </div>




  




     

  


  )
}

export default Keyboard   
     {/* <h3>{product.name}</h3>
<img src={product.image} alt={product.name} /> */}


// id: 1,
//     name: "Laptop Lenovo LOQ Gaming 15IRX9 | AI-Powered Gaming PC 13Gen Intel® Core™ i7-13650HX, 24GB DDR5 NVIDIA GeForce RTX 4050 6GB & 15.6\"",
//     category: "Laptop",
//     image: p1_img,
//     new_price: 500,
//     old_price: 550,
//     ProcessorGeneration: "13th Generation",
//     ProcessorFamily: "Intel Core i7-13650HX",
//     ProcessorSpeed: "Up to 4.90 GHz",
//     ProcessorCache: "24MB",
//     NumberOfCores: "14 Cores - 20 Threads",
//     RAMCapacity: "24GB",
//     MemoryType: "DDR5 4800 Mhz",
//     StorageCapacity: "512GB",
//     StorageType: "SSD M.2 2242 PCIe® 4.0x4 NVMe®",
//     GraphicManufacturer: "NVIDIA",
//     GraphicModel: "GeForce RTX 4050",
//     BoostClock: "2370MHz",
//     TGP: "105W",
//     GraphicMemory: "6GB",
//     GraphicMemoryType: "DDR6",
//     GraphicMemorySource: "Dedicated",
//     DisplaySize: "15.6\"",
//     DisplayTechnology: "IPS-Level G-SYNC®",
//     DisplayResolution: "1920 x 1080 FHD 144Hz",
//     Keyboard: "White Backlit Keyboard"