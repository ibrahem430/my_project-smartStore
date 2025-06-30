import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const PageOfItem =()=> {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams(); // Extracts ID from URL like /pageOfitem/1

  const product = all_product.find((item) => item.id === Number(productId));

 
 if(product.category=="Laptop"){
  return (
   
    <div>
      <ProductDisplay product={product}/>
    </div>
  );}
}

export default PageOfItem;
