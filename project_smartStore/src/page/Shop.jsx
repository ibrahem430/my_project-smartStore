import React from 'react'
import Hero from '../components/Hero/Hero'
import{Routes,Route} from "react-router-dom"
import Advertisement from '../components/Advertisement/Advertisement.jsx'
import Advertisement2 from '../components/Advertisement/Advertisement2.jsx'
function Shop() {
  return (
    <div>
 
 <Advertisement/>
<Hero/>
   <Advertisement2/>

    </div>
  )
}

export default Shop