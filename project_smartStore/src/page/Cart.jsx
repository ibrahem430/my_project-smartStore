import React, { useEffect, useState , useRef } from 'react';
import "./Css/cart.css";
import { Link, useNavigate } from 'react-router-dom';

// function gitcount2(){
//   return Count;
// }
function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 
  const printRef = useRef();

  const handlePrint = () => {
    window.print();
  };


  useEffect(() => {
    fetch('http://localhost:5000/getTheProduct')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

 function handleRemove(item) {
  const userId = 1;

  if (item.quantity === 1) {
    // DELETE
    fetch(`http://localhost:5000/delete-product/${item.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.text())
      .then(() => {
        alert('Item deleted');
        setData(prev => prev.filter(i => i.id !== item.id));
                  window.location.reload(); // optional

        // OPTIONAL: reload if you don't refetch
        // window.location.reload();
      })
      .catch((err) => console.error('Delete error:', err));
  } else {
    // UPDATE: reduce quantity
    fetch('http://localhost:5000/update-cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        product_id: item.product_id,
        quantity: item.quantity - 1,
      }),
    })
      .then((res) => res.text())
      .then(() => {
        alert('Quantity updated');
                 window.location.reload(); // optional

      })
      .catch((err) => console.error('Update error:', err));
  }
}

const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
  fetch('http://localhost:5000/price-count')
    .then(res => res.json())
    .then(data => setCartCount(data.count))
    .catch(err => console.error(err));
}, []);



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
            <td>quantity</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><img
           src={item.image ? `http://localhost:5000/image/${item.image}` : "fallback.png"}
           alt={item.name_product || "product image"}
          width="50"
          />
               </td>
            <Link style={{textDecoration:"none", color:"black"}} to = {`/pageOfitem/${item.product_id}`}> <td style={{ width: "40%" }}>
  {item.name_product ? item.name_product.substring(0, 70) : "No name"}
</td>
</Link>
              <td style={{ width: "20%" }}>Dell</td>
              <td style={{ width: "20%" }}>${item.price}</td> 
              <td> {item.quantity}</td>
              <td>
                <button
                  onClick={() => handleRemove(item)}
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

      <div><h3>the count is ={cartCount}</h3></div>
      <div><button onClick={handlePrint}>print</button></div>
    </div>
  );
}

export default Cart;
//  export {gitcount2};