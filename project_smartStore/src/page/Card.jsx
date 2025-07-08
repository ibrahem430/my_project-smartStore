import React, { useState } from 'react';
import "./Prodect.css";
import { Link, useNavigate } from 'react-router-dom';
let count=0;
function Card(props) {
  const navigate = useNavigate();
  const handleAdd = () => {
     count++;
    const userId = 1;
    fetch('http://localhost:5000/add-to-cart',{
      method:'POST',
            headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        user_id: userId,
        product_id: props.id,
        quantity: 1,
        name_product: props.name,
        price : props.price
      }),
    })
    .then((res)=>res.text())
    .then((data)=>{
      alert(`${props.name}`)
      navigate('/cart')
      
    })
    .catch((err)=>{
      alert(`error`)
    })
  
  };

  return (
    <div className="theCrde" style={{ margin: "0px" }}>
      <div className='the_offer'>
        {props.offer && <h3>-{props.offer}%</h3>}
        {props.new && <h2>{props.new}</h2>}
      </div>

      <div className='cover-of-img'>
        <img className="size_photo" src={props.image} alt={props.name} />
      </div>

      <div className='cover-of-text'>
        <Link className='link-of-item' to={`/pageOfitem/${props.id}`}>
          <h3 onClick={() => window.scrollTo(0, 0)} className="text_algin">
            {props.name.substring(0, 60)}
          </h3>
        </Link>
      </div>

      <h3 className='price'>${props.price}</h3>

      <div className='thebutton'>
        <button className="click" onClick={handleAdd}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
export {count}

// const userId = 1;
//     fetch('http://localhost:5000/add-to-cart', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         user_id: userId,
//         product_id: props.id,
//         quantity: 1,
//         name_product: props.name,
//       }),
//     })
//       .then((res) => res.text())
//       .then((data) => {
//         alert(`${props.name} added to cart`);
//         console.log(data);
//         navigate('/cart'); 
//       })
//       .catch((err) => {
//         console.error(err);
//         alert('Error adding to cart');
//       });