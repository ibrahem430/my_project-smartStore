import React from 'react'
import "./Home.css"
import { useState ,useEffect } from 'react'
import Swal from 'sweetalert2';
function Home() {
   const [isLogin,setislogin]=useState(false);
   const [email,setemail]=useState('');
   const[password,setPassword]= useState('');

   function handellogin(){
     fetch('http://localhost:5000/loginAdmin'
,{
        method:"POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
            email,
            password
        })
     })
         .then(res => {
        if (!res.ok) throw new Error("Login failed");
        return res.json(); 
      })
     .then((data)=>{
      if( data.correct){
        localStorage.setItem('idAdmin','1'); 
         Swal.fire({
            title: "Correct",
             icon: "success",
             draggable: true
                  });
     
        setislogin(true);}
      
     })
     .catch(err=>console.log(err))
   }

     useEffect(() => {
    const adminId = localStorage.getItem('idAdmin');
    if (adminId === '1') {
      setislogin(true);
    }
  }, []);

  return (
    <div className='name'> 
   {!isLogin && <div className='thelogin-admin'>
    <h2>Login</h2>
        <input 
        type="email"
        placeholder='email'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
        <br />
        <br />
        <input type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handellogin}>Login</button>
    </div>}
    {isLogin &&
   <div className='thepage-afetr-login'>
     <h1>The Admin Page</h1>
     <button className='logout-admin' onClick={()=>{setislogin(false)
               localStorage.setItem('idAdmin','0');}

    }>Logout</button>
   </div>}
   </div>
  )
}

export default Home