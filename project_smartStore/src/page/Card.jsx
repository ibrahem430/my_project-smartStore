import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Prodect.css";
import Swal from 'sweetalert2';


function Card(props) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');  // user ID from localStorage

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:5000/getTheProduct/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [userId]);

  const  handleAdd = () => {
    if (!userId) {
      alert("Please login first!");
      navigate('/login');
      return;
    }

    const found = data.find(item => item.product_id === props.id);

    if (!found) {
fetch('http://localhost:5000/add-to-cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    user_id: userId,
    product_id: props.id,
    quantity: 1,
    name_product: props.name,
    price: props.price,
    image: props.image
  }),
})
  .then((res) => res.text())
  .then(() => {
    Swal.fire({
    
      text: props.name,
      imageUrl: props.image,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
  
      confirmButtonText: "Yes",                  
    }).then((result) => {

      if (result.isConfirmed) {
        window.location.reload();     
      }
    });
  })
  .catch((err) => {
    console.error("Add to cart error:", err);
    Swal.fire({
      icon: "error",
      title: "Add failed",
      text: "Could not add the product to the cart."
    });
  })

          
          // window.location.reload(); // optional
      
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
  .then(() => {
    Swal.fire({
    
      text: props.name,
      imageUrl: props.image,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
  
      confirmButtonText: "Yes",
    
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  })
  .catch((err) => {
    alert("Update error");
    console.error("Update error:", err);
  });

    }
  };

  return (
    <div className="theCrde" style={{ margin: "0px" }}>
      <div className='the_offer'>
        {props.offer ? <h3>-{props.offer}%</h3>:null}
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
