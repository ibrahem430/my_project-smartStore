import React, { useContext } from 'react';
import { shopContext } from '../context/ShopContext';
import Card from './Card';
import "./Css/Shopcategory.css"

function ShopCategory(props) {
  const { all_product } = useContext(shopContext); // <-- correct spelling here

  return (
    <div className='flex'>
      {all_product.map((item, i) => {
        if (props.category === item.category) {
          return (
            
              <Card
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}  
      />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ShopCategory;
