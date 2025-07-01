import React from 'react'
import all_product from '../Assets/all_product'
import Card from '../../page/Card'
import "./RelatedProducts.css"

function RelatedProducts (props){

const {product}=props

  return (
    <div className='thecover-of-card2'>
    <div className='flex2'>
       {all_product.map((item,i)=>{
        if(item.name.split(" ")[1] ===product.name.split(" ")[1]&&item.id!==product.id)
        return (  
         <Card
        key={item.id}
        id={item.id}
        name={item.name}
       new_price={item.new_price}
        image={item.image}  
      />) 
       })}
    </div>
    </div>
  )
}

export default  RelatedProducts
