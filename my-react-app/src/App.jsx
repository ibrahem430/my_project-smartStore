import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './componant/Navbar/Navbar'
import AddProduct from './componant/AddProduct/AddProduct'
import AllProduct from './componant/AllProduct/AllProduct'
import AllUser from './componant/AllUser/AllUser'
import AllCart from './componant/AllCart/AllCart'
import Home from './componant/Home/Home'
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}  ></Route>
    <Route path='/addproduct' element={<AddProduct/>}  ></Route>
        <Route path='/allproduct' element={<AllProduct/>}  ></Route>
    <Route path='/alluser' element={<AllUser/>}  ></Route>
    <Route path='/allcart' element={<AllCart/>}  ></Route>

    
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
