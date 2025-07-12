import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Prodect.css";

function Card(props) {
  const navigate = useNavigate();
  const userId = 1;

  const [data, setData] = useState([]);

  // ✅ Fetch cart data on mount
  useEffect(() => {
    fetch('http://localhost:5000/getTheProduct')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleAdd = () => {
    const found = data.find(item => item.product_id === props.id);

    if (!found) {
      // 🟢 Product not in cart → Add it
      fetch('http://localhost:5000/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: props.id,
          quantity: 1,
          name_product: props.name,
          price: props.price
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(`${props.name} added to cart`);
          navigate('/cart');
          window.location.reload(); // optional
        })
        .catch((err) => {
          alert(`Add error`);
          console.error(err);
        });
    } else {
     
      fetch('http://localhost:5000/update-cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: props.id,
          quantity: found.quantity + 1,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(`Quantity updated`);
          navigate('/cart');
          window.location.reload(); // optional
        })
        .catch((err) => {
          alert(`Update error`);
          console.error(err);
        });
    }
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
