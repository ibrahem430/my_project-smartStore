import React from 'react'
import "./Prodect.css"
import { Link } from 'react-router-dom';


    function Card(props) {
      return( 

        <div style={{margin:"0px"}}
        className="theCrde">
         <div className='cover-of-img'>
          <img className="size_photo" src={props.image} alt={props.name} /></div>
<div className='cover-of-text'>
  <Link className='link-of-item' to={`/pageOfitem/${props.id}`}>
    <h3 onClick={()=>window.scrollTo(0,0)} className="text_algin">{props.name.substring(0, 60)}</h3>
  </Link>
</div>
          <h3 className='price' >${props.price}</h3>
          {/* <p className="text_algin">{props.tel.substring(0, 100)}</p>
          <p className="text_algin" >{props.email.substring(0, 100)}</p> */}
          <div className='thebutton'> <button className="click">Add to Cart</button></div>
        </div>
   
      );
    }

export default Card