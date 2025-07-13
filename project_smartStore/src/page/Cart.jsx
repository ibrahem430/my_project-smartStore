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
          alert('Item deleted');
          setData(prev => prev.filter(i => i.id !== item.id));
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
          alert('Quantity updated');
          setData(prev => prev.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          ));
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
      <h1>The Cart Of Item</h1>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Product</td>
            <td>Modale</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image ? `http://localhost:5000/image/${item.image}` : "fallback.png"}
                  alt={item.name_product || "product image"}
                  width="50"
                />
              </td>
              <td style={{ width: "40%" }}>
                <Link style={{ textDecoration: "none", color: "black" }} to={`/pageOfitem/${item.product_id}`}>
                  {item.name_product ? item.name_product.substring(0, 70) : "No name"}
                </Link>
              </td>
              <td style={{ width: "20%" }}>Dell</td>
              <td style={{ width: "20%" }}>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
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

      <div><h2>Total items: {cartCount}</h2></div>
      <div> <h2>Total count : {priceCount}</h2></div>
      <div><button onClick={handlePrint}>Print</button></div>
    </div>
  );
}

export default Cart;
