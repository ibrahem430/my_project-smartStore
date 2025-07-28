import React, { useEffect, useState } from 'react';
import "./AllUser.css"
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function AllUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allUser')  
      .then((res) => res.json())          
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []); 

   const navigate = useNavigate();

  const userId = localStorage.getItem('idAdmin');

  useEffect(() => {
    if (userId!=1) {
   Swal.fire({
  title: 'Warning!',
  text: 'Please login first!',
  icon: 'warning',
  confirmButtonColor: 'green',
});      navigate('/');
      return;
    }})
     return (
    <div className='thepageofcart'>
         <table>
            <thead>
                <tr>
                    <td  style={{fontWeight:"700",textAlign:'center', backgroundColor:' rgb(83, 255, 246)', width:"600px"}}>ID</td>
                    <td  style={{fontWeight:"700",textAlign:'center',backgroundColor:'  rgb(83, 255, 246)',width:"600px"}}> User Name</td>
                    <td  style={{fontWeight:"700",textAlign:'center',backgroundColor:'  rgb(83, 255, 246)', width:"600px"}}>Email</td>
                </tr>
            </thead></table>
      {data.map((item, index) => (
        <div  key={index}>
            {/* <div className='thepacageofcart'>
          <div style={{fontWeight:"700"}}>User ID: {item.user_id}</div>
         
           <div style={{fontWeight:"700"}}>product ID: {item.product_id}</div>
           
          <div style={{fontWeight:"700"}}>product name: {item.name_product}</div>
        
          <div style={{fontWeight:"700"}}>price: {item.price}</div> */}
         <table>
            <tbody>
                 <tr>
                   <td  className='thehover' style={{fontWeight:"700",textAlign:'center', width:"600px"}}>{item.id}</td>
                    <td  className='thehover' style={{fontWeight:"700",textAlign:'center',width:"600px"}}>{item.username}</td>
                    <td  className='thehover' style={{fontWeight:"700",textAlign:'center', width:"600px"}}>{item.email}</td>
                </tr>
            </tbody>
          </table>
             
          </div>
          
        
      ))}
    </div>
  );
}

export default AllUser;
