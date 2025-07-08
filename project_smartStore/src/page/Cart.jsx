import React, { useEffect, useState } from 'react';
import "./Css/cart.css";
import { Link, useNavigate } from 'react-router-dom';
function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://localhost:5000/getTheProduct')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function handleRemove(id) {
    fetch(`http://localhost:5000/delete-product/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.text())
      .then((data) => { 
       
        console.log('Deleted:', data);
        alert('Item deleted');
       setData(prev=>prev.filter(item =>id !==item.id)) 
      })
      .catch((err) => console.log('Delete error:', err));
  }

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
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{width:"20%"}}><img src={`http://localhost:5000/image/${item.image}`} alt={item.name_product} width="50" /></td>
            <Link style={{textDecoration:"none", color:"black"}} to = {`/pageOfitem/${item.product_id}`}> <td style={{ width: "40%" }}>{item.name_product.substring(0, 70)}</td></Link>
              <td style={{ width: "20%" }}>Dell</td>
              <td style={{ width: "20%" }}>${item.price}</td>
              <td>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{ border: "none", backgroundColor: "white" }}
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
    </div>
  );
}

export default Cart;
