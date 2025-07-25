import React, { useEffect, useState } from 'react';
import "./AllCart.css"
function AllCart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allcart')  
      .then((res) => res.json())          
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className='thepageofcart'>
      {data.map((item, index) => (
        <div  key={index}>
            <div className='thepacageofcart'>
          <div>User ID: {item.user_id}</div>
           <div>product ID: {item.product_id}</div>
          <div>product name: {item.name_product}</div>
          <div>price: {item.price}</div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCart;
