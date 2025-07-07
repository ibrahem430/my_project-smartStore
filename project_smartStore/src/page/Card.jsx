import React from 'react';
import "./Prodect.css";
import { Link } from 'react-router-dom';
// import { addToCart } from './ShopCategory'; // ✅ import function

// const userId = 1; // temporary user (should come from auth or localStorage later)

function Card(props) {
  // const handleAddToCart = () => {
  //   addToCart(userId, props.id, 1)
  //     .then(() => {
  //       alert(`${props.name} added to cart`);
  //     });
  // };

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
        <button className="click" >Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
