import React from 'react'
import "./Prodect.css"


    function Card(props) {
      return( 

        <div style={{margin:"0px"}}
        className="theCrde">
          
          <img className="size_photo" src={props.img} alt="avatar_img" />
          <h3>{props.name}</h3>
          <br/>
          <p className="text_algin">{props.tel.substring(0, 100)}</p>
          <p className="text_algin" >{props.email.substring(0, 100)}</p>
          <button className="click">Add to Cart</button>
        </div>
   
      );
    }

export default Card