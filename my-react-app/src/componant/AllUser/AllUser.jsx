import React, { useEffect, useState } from 'react';
import "./AllUser.css"
function AllUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allUser')  
      .then((res) => res.json())          
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className='thepageofcart'>
      {data.map((item, index) => (
        <div  key={index}>
            <div className='thepacageofcart'>
          <div style={{fontWeight:"700"}}>User ID: {item.id}</div>
           <div style={{fontWeight:"700"}}>product ID: {item.username}</div>
          <div style={{fontWeight:"700"}}>product name: {item.email}</div>
         

          </div>
        </div>
      ))}
    </div>
  );
}

export default AllUser;
