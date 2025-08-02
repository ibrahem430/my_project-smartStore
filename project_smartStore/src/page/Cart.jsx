import React, { useEffect, useState } from 'react';
import "./Css/cart.css";
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      alert("Please login first!");
      navigate('/login');
      return;
    }

    fetch(`http://localhost:5000/getTheProduct/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [userId, navigate]);

  const handleRemove = (item) => {
    if (!userId) return;

    if (item.quantity === 1) {
      fetch(`http://localhost:5000/delete-product/${item.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          // alert('Item deleted');
          setData(prev => prev.filter(i => i.id !== item.id));
              window.location.reload();

        })
        .catch(err => console.error('Delete error:', err));
    } else {
      fetch('http://localhost:5000/update-cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: item.product_id,
          quantity: item.quantity - 1,
        }),
      })
        .then(() => {
          // alert('Quantity updated');
          setData(prev => prev.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          ));
              window.location.reload();

        })
        .catch(err => console.error('Update error:', err));
    }
  };

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:5000/cart-count/${userId}`)
      .then(res => res.json())
      .then(data => setCartCount(data.count))
      .catch(err => console.error(err));
  }, [userId]);

  
  const [priceCount, setpricecount] = useState(0);
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:5000/price-count/${userId}`)
      .then(res => res.json())
      .then(data => setpricecount(data.count))
      .catch(err => console.error(err));
  }, [userId]);
  const handlePrint = () => {
    window.print();
  };


  return (
    <div className='thecart'>
     <div className='the-cart-count-price'>
       
         <h1>The Cart Of Item</h1>
      <div className='thetotalpricecart'>
         <div className='thetotalcartcount'><h2>Total items : {cartCount}</h2></div>
        
         <h2>Total count : {priceCount}</h2></div>
      
      </div> 
      <table>
        
        <thead>
            {/* {data.map((item) => ( */}
          <tr  >
            <td style={{width:"150px"}}>Image</td>
            <td style={{width:"400px"}}>Product</td>
            <td style={{width:"120px"}}>Modale</td>
            <td style={{width:"120px"}}>Price</td>
            <td style={{width:"120px"}}>Quantity</td>
            <td style={{width:"120px"}}>Delete</td>
          </tr>
            {/* ))} */}
        </thead>
       
        <tbody> 
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{width:"150px"}}>
  <img src={item.image} alt={item.name_product} style={{width:"120px",height:"100px"}} />


              </td>
              <td style={{width:"400px"}}>
                <Link style={{ textDecoration: "none", color: "black" }} to={`/pageOfitem/${item.product_id}`}>
                  {item.name_product ? item.name_product.substring(0, 70) : "No name"}
                </Link>
              </td>
              <td style={{width:"120px"}}>{item.type}</td>
              <td style={{width:"120px"}}>${item.price}</td>
              <td style={{width:"120px"}} >{item.quantity}</td>
              <td style={{width:"120px"}}>
                <button
                  onClick={() => handleRemove(item)}
                  style={{ border: "none", backgroundColor: "white", cursor: "pointer" }}
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="https://www.shutterstock.com/image-vector/cross-sign-element-red-grunge-600nw-589840886.jpg"
                    alt="Delete"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <div><button className='print' onClick={handlePrint}>Print</button></div>
    </div>
  );
}

export default Cart;
