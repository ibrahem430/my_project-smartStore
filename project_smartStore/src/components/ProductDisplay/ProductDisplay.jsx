import React from 'react'

const ProductDisplay=(props) =>{
  
    const {product}=props;
    return (
    <div>
        <h3>{product.name}</h3>
<img src={product.image} alt={product.name} />
    </div>
  )
}

export default ProductDisplay