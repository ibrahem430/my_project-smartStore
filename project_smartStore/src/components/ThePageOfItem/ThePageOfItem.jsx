import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./ThePageOfItem.css";

function ThePageOfItem(props) {
  const { product } = props;
  const navigate = useNavigate();
  const userId = 1;

  const [data, setData] = useState([]);
  const handleAdd = () => {
    const found = data.find(item => item.product_id === product.id);

    if (!found) {
      // 🟢 Product not in cart → Add it
      fetch('http://localhost:5000/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: product.id,
          quantity: 1,
          name_product: product.name,
          price: product.price
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(`${product.name} added to cart`);
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
          product_id: product.id,
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
    <div>
      <h3 style={{ color: " rgb(86, 86, 86)" }}>
        Home/Shop/{product.category}/{product.name.substring(7, 30)}
      </h3>
      <div className='thepage33'>
        <h1>{product.type?.toUpperCase() || ''} </h1>
        <div className='the-cover-of-img-and-name-and-price'>
          <div className='img-cover'>
            <img src={`http://localhost:5000/image/${product.image}`} alt="" />
          </div>
          <div className='cover-of-name-price'>
            <h2 style={{ marginLeft: "10%" }}>
              Type of {product.category?.toUpperCase() || ''}: {product.type?.toUpperCase() || ''}
            </h2>
            <h2 className='the-name-of-product'>{product.name}</h2>
            <h2 className='Price'>Price:</h2>
            <h2 className='the-price-of-product'>JOD {product.old_price}</h2>
            <h1>JOD {product.new_price}</h1>
            <div className='the-img-of-veza'>
              <img
                src="https://gts.jo/image/catalog/gts_theme/gts-payment-options.png"
                alt=""
              />
            </div>
            <div>
              <button className='click2' onClick={handleAdd}>Add TO Cart</button>
            </div>
            <button className='whatsapp'>
              <img
                style={{ height: "20px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
                alt=""
              /> Chat With Us In WhatsApp
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "10%" }}></div>

        {product.keyboardfeatures && (
          <div className='the-name-of-specifications'>
            <h3>Keyboard Specifications</h3>
          </div>
        )}
        {product.type && (
          <div className='the-part-of-specification'>
            <h3>{product.category?.toUpperCase() || ''} Type: {product.type?.toUpperCase() || ''}</h3>
          </div>
        )}
        {product.keyboardfeatures && (
          <div className='the-part-of-specification'>
            <hr />
            <h3>Keyboard Features: {product.keyboardfeatures?.toUpperCase() || ''}</h3>
          </div>
        )}

        {product.processorgeneration && (
          <div className='the-name-of-specifications'>
            <h3>Processor Specifications</h3>
          </div>
        )}
        {product.processorgeneration && (
          <div className='the-part-of-specification'>
            <h3>Processor Generation: {product.processorgeneration}</h3>
            <hr />
          </div>
        )}
        {product.processorfamily && (
          <div className='the-part-of-specification'>
            <h3>Processor Family :{product.processorfamily}</h3>
            <hr />
          </div>
        )}
        {product.processorspeed && (
          <div className='the-part-of-specification'>
            <h3>Processor Speed :{product.processorspeed} </h3>
            <hr />
          </div>
        )}
        {product.processorcache && (
          <div className='the-part-of-specification'>
            <h3>Processor Cache: {product.processorcache}</h3>
            <hr />
          </div>
        )}
        {product.numberofcores && (
          <div className='the-part-of-specification'>
            <h3>Number Of Cores: {product.numberofcores} </h3>
          </div>
        )}
        {product.ramcapacity && (
          <div className='the-name-of-specifications'>
            <h3>Memory</h3>
          </div>
        )}
        {product.ramcapacity && (
          <div className='the-part-of-specification'>
            <h3>RAM Capacity: {product.ramcapacity} </h3>
          </div>
        )}
        {product.memorytype && (
          <div className='the-part-of-specification'>
            <h3>Memory Type: {product.memorytype} </h3>
          </div>
        )}
        {product.storagecapacity && (
          <div className='the-name-of-specifications'>
            <h3>Storage</h3>
          </div>
        )}
        {product.storagecapacity && (
          <div className='the-part-of-specification'>
            <h3> Storage Capacity: {product.storagecapacity} </h3>
            <hr />
          </div>
        )}
        {product.storagetype && (
          <div className='the-part-of-specification'>
            <h3>Storage Type: {product.storagetype} </h3>
          </div>
        )}
        {product.graphicmanufacturer && (
          <div className='the-name-of-specifications'>
            <h3>Graphic Card</h3>
          </div>
        )}
        {product.graphicmanufacturer && (
          <div className='the-part-of-specification'>
            <h3>Graphic Manufacturer: {product.graphicmanufacturer} </h3>
            <hr />
          </div>
        )}
        {product.graphicmodel && (
          <div className='the-part-of-specification'>
            <h3>Graphic Model: {product.graphicmodel} </h3>
            <hr />
          </div>
        )}
        {product.graphicmemory && (
          <div className='the-part-of-specification'>
            <h3>Graphic Memory: {product.graphicmemory} </h3>
            <hr />
          </div>
        )}
        {product.graphicmemorytype && (
          <div className='the-part-of-specification'>
            <h3>Graphic Memory Type: {product.graphicmemorytype} </h3>
          </div>
        )}
        {product.coolingsystemmodel && (
          <div className='the-name-of-specifications'>
            <h3>Cooling System </h3>
          </div>
        )}
        {product.coolingsystemmodel && (
          <div className='the-part-of-specification'>
            <h3>Cooling System Model : {product.coolingsystemmodel} </h3>
          </div>
        )}

        {product.displaysize && (
          <div className='the-name-of-specifications'>
            <h3>Display Specifications</h3>
          </div>
        )}
        {product.displaysize && (
          <div className='the-part-of-specification'>
            <h3> Display Size: {product.displaysize} </h3>
            <hr />
          </div>
        )}
        {product.displayresolution && (
          <div className='the-part-of-specification'>
            <h3>Display Resolution: {product.displayresolution} </h3>
          </div>
        )}
        {product.contrastratio && (
          <div className='the-part-of-specification'>
            <h3>Display Resolution: {product.contrastratio} </h3>
          </div>
        )}
        {product.responsetime && (
          <div className='the-part-of-specification'>
            <h3>Display Resolution: {product.responsetime} </h3>
          </div>
        )}
        {product.signalfrequency && (
          <div className='the-part-of-specification'>
            <h3>Display Resolution: {product.signalfrequency} </h3>
          </div>
        )}

        {(product.keyboard || product.ports) && (
          <div className='the-name-of-specifications'>
            <h3>Inputs & Outputs</h3>
          </div>
        )}
        {product.keyboard && (
          <div className='the-part-of-specification'>
            <h3>Keyboard: {product.keyboard} </h3>
            <hr />
          </div>
        )}
        {product.ports && (
          <div className='the-part-of-specification'>
            <h3>ports: {product.ports} </h3>
            <hr />
          </div>
        )}
        {product.powersupply && (
          <div className='the-part-of-specification'>
            <h3>Power Supply: {product.powersupply} </h3>
          </div>
        )}

        {(product.casemodel || product.lighttype) && (
          <div className='the-name-of-specifications'>
            <h3>Case Model</h3>
          </div>
        )}
        {product.casemodel && (
          <div className='the-part-of-specification'>
            <h3>Case Model: {product.casemodel} </h3>
            <hr />
          </div>
        )}
        {product.lighttype && (
          <div className='the-part-of-specification'>
            <h3>Light Type: {product.lighttype} </h3>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
}

export default ThePageOfItem;
