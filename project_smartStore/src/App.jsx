import React from "react";

import Navbar from "./components/Navbar/Navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from "./page/Shop";
import About from "./page/About";
import Cart from "./page/Cart";
import LoginSignup from "./page/LoginSignup";
import Contact from "./page/Contact";
import ShopCategory from "./page/ShopCategory";


function App() {
 
  return (
    <div>
    <BrowserRouter>
<Navbar/>

   <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<LoginSignup/>}/>
    <Route path ="/register" element={<LoginSignup/>}/>
    <Route path ="/contact" element={<Contact/>}/>
 <Route path ="/Pcs" element={<ShopCategory category="Pcs"/>}/>
        <Route path ="/laptop" element={<ShopCategory category="laptop"/>}/>
         <Route path ="/gaming" element={<ShopCategory category="gaming"/>}/>
          <Route path ="/keyboard" element={<ShopCategory category="keyboard"/>}/>
           <Route path ="/mouse" element={<ShopCategory category="mouse"/>}/>
            <Route path ="/headphones" element={<ShopCategory category="headphones"/>}/>
             <Route path ="/monitor" element={<ShopCategory category="monitor"/>}/>
              <Route path ="/charges" element={<ShopCategory category="charges"/>}/>

   </Routes>

   </BrowserRouter>

   </div>
  );
}

export default App;
