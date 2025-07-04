import React, { useContext, useState, useEffect } from 'react';
import { shopContext } from '../context/ShopContext';
import Card from './Card';
import "./Css/Shopcategory.css"
import img_sort from "../components/Assets/sort.jpeg"
function ShopCategory(props) {
  const [data, setData] = useState([]);

      useEffect(() => {
        fetch("http://localhost:5000/product")
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err));
      }, []);

      const count = data.filter((item) => item.category === props.category).length;

  return (
   
    <div >

      <div className='the-header-of-page'>
        <img src={props.banner} alt="image" />
      </div>
    
      <div className='thecover-of-card'>
       
        

              <h2>The Number of Items Is : {count}</h2>  
   

  <div className='sort'>
        Sort By  <img style={{height:"10px", marginLeft:"2px"}} src={img_sort} alt="" />
      </div>

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
