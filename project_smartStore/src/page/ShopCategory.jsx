import React, { useContext, useState, useEffect } from 'react';
import { shopContext } from '../context/ShopContext';
import Card from './Card';
import "./Css/Shopcategory.css"

function ShopCategory(props) {
  const [data, setData] = useState([]);

      useEffect(() => {
        fetch("http://localhost:5000/product")
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err));
      }, []);
  return (
   
    <div >
      <div className='the-header-of-page'>
        <img src={props.banner} alt="" />
      </div>
      <div className='thecover-of-card'>
    <div className='flex'>
      {data.map((item, i) => {
        if (props.category === item.category) {
          return (

              <Card
        key={item.id}
        id={item.id}
        name={item.name}
         price={item.new_price}
        image={`http://localhost:5000/image/${item.image}`} 
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
