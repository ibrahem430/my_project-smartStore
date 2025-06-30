import React, { useContext } from 'react';
import { shopContext } from '../context/ShopContext';
import Card from './Card';
import "./Css/Shopcategory.css"

function ShopCategory(props) {
  const { all_product } = useContext(shopContext); // <-- correct spelling here

  return (
    <div >
      <div className='the-header-of-page'>
        <img src={props.banner} alt="" />
      </div>
      <div className='thecover-of-card'>
    <div className='flex'>
      {all_product.map((item, i) => {
        if (props.category === item.category) {
          return (

              <Card
        key={item.id}
        id={item.id}
        name={item.name}
       new_price={item.new_price}
        image={item.image}  
      />
          );
        } else {
          return null;
        }
      })}
    </div>
    <div style={{marginBottom:"5%"}}></div></div>
    </div>
  );
}

export default ShopCategory;
