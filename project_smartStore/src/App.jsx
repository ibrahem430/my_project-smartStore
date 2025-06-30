import React from "react";

import Navbar from "./components/Navbar/Navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from "./page/Shop";
import About from "./page/About";
import Cart from "./page/Cart";
import LoginSignup from "./page/LoginSignup";
import Contact from "./page/Contact";
import ShopCategory from "./page/ShopCategory";
import Footer from "./components/Footer/Footer";
import labtop_banner from "./components/Assets/photo-the-page/laptop3.png"
import pc_banner from "./components/Assets/photo-the-page/pc.png"
import headset_banner from "./components/Assets/photo-the-page/headset.png"
import PageOfItem from "./page/PageOfItem"


function App() {
 
  return (
    <div>
    <BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Shop />} />
  <Route path="/about" element={<About />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<LoginSignup />} />
  <Route path="/register" element={<LoginSignup />} />
  <Route path="/contact" element={<Contact />} />

  {/* Product Category Routes - all lowercase and singular */}
  <Route path="/pcs" element={<ShopCategory banner={pc_banner} category="pcs" />} />
  <Route path="/Laptop" element={<ShopCategory banner={labtop_banner} category="Laptop" />} />
  <Route path="/gaming" element={<ShopCategory category="gaming" />} />
  <Route path="/keyboard" element={<ShopCategory category="keyboard" />} />
  <Route path="/mouse" element={<ShopCategory  category="mouse" />} />
  <Route path="/headphones" element={<ShopCategory banner={headset_banner} category="headphones" />} />
  <Route path="/monitor" element={<ShopCategory category="monitor" />} />
  <Route path="/charges" element={<ShopCategory category="charges" />} />
  <Route path="/pageOfItem/:productId" element={<PageOfItem  />} />
  
</Routes>

  <Footer/>
   </BrowserRouter>

   </div>
  );
}

export default App;
