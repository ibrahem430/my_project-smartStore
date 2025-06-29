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
  <Route path="/pcs" element={<ShopCategory category="pcs" />} />
  <Route path="/Laptop" element={<ShopCategory category="Laptop" />} />
  <Route path="/gaming" element={<ShopCategory category="gaming" />} />
  <Route path="/keyboard" element={<ShopCategory category="keyboard" />} />
  <Route path="/mouse" element={<ShopCategory category="mouse" />} />
  <Route path="/headphones" element={<ShopCategory category="headphones" />} />
  <Route path="/monitor" element={<ShopCategory category="monitor" />} />
  <Route path="/charges" element={<ShopCategory category="charges" />} />
</Routes>

  <Footer/>
   </BrowserRouter>

   </div>
  );
}

export default App;
