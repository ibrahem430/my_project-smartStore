import React from 'react'
import "./Prodect.css"


    function Card(props) {
      return( 

        <div style={{margin:"0px"}}
        className="theCrde">
          
          <img className="size_photo" src={props.image} alt="avatar_img" />
          <h3 className="text_algin" >{props.name.substring(0, 100)}</h3>
          <br/>
          {/* <p className="text_algin">{props.tel.substring(0, 100)}</p>
          <p className="text_algin" >{props.email.substring(0, 100)}</p> */}
          <div className='thebutton'> <button className="click">Add to Cart</button></div>
        </div>
   
      );
    }

export default Card