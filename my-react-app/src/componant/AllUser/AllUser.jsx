import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function AllUser() {
  const[data,setdata]=useState([]);
   useEffect(()=>{
    fetch('http//:localhost:5000/')
   })

  return (
    <div>AllUser</div>
  )
}

export default AllUser