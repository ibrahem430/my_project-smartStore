import React ,{useEffect ,useState} from "react";

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
import keyboard_banner from "./components/Assets/photo-the-page/keyboard2.png"
import mouse_banner from "./components/Assets/photo-the-page/mouse.png"
import charge_banner from "./components/Assets/photo-the-page/charger.png"
import monitor_banner from "./components/Assets/photo-the-page/monitor.png"
import gaming_banner from "./components/Assets/photo-the-page/gaming.jpg"
import laptop_gaming_banner from "./components/Assets/photo-the-page/laptop-gaming.png"
import pc_gaming_banner from "./components/Assets/photo-the-page/pc-gaming.png"
import keyboard_gaming_banner from "./components/Assets/photo-the-page/keyboard-gaming.png"
import mouse_gaming_banner from "./components/Assets/photo-the-page/mouse-gaming.png"
import mounitor_gaming_banner from "./components/Assets/photo-the-page/monitor-gaming.png"
import headset_gaming_banner from "./components/Assets/photo-the-page/headset-gaming.png"






import PageOfItem from "./page/PageOfItem"
import ShopGaming from "./components/ShopGaming/ShopGaming";


function App() {
 

  return (<div>

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
  <Route path="/keyboards" element={<ShopCategory banner={keyboard_banner} category="keyboard" />} />
  <Route path="/mouse" element={<ShopCategory banner={mouse_banner} category="mouse" />} />
  <Route path="/headphones" element={<ShopCategory banner={headset_banner} category="headphones" />} />
  <Route path="/monitor" element={<ShopCategory banner={monitor_banner}  category="monitor" />} />
  <Route path="/charges" element={<ShopCategory banner={charge_banner}  category="charges" />} />
  <Route path="/pageOfItem/:productId" element={<PageOfItem  />} />
  <Route path="/gaming" element={<ShopGaming banner={gaming_banner}/>}/>



    <Route path="/pcs_gaming" element={<ShopCategory banner={pc_gaming_banner} category="pcs_gaming" />} />
  <Route path="/Laptop_gaming" element={<ShopCategory banner={laptop_gaming_banner} category="Laptop_gaming" />} />
  <Route path="/keyboards_gaming" element={<ShopCategory banner={keyboard_gaming_banner} category="keyboard_gaming" />} />
  <Route path="/mouse_gaming" element={<ShopCategory banner={mouse_gaming_banner} category="mouse_gaming" />} />
  <Route path="/headphones_gaming" element={<ShopCategory banner={headset_gaming_banner} category="headphones_gaming" />} />
  <Route path="/monitor_gaming" element={<ShopCategory banner={mounitor_gaming_banner}  category="monitor_gaming" />} />
</Routes>

  <Footer/>
   </BrowserRouter></div>
  );
}

export default App;


//   <BrowserRouter>
// <Navbar/>

// <Routes>
//   <Route path="/" element={<Shop />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/login" element={<LoginSignup />} />
//   <Route path="/register" element={<LoginSignup />} />
//   <Route path="/contact" element={<Contact />} />

//   {/* Product Category Routes - all lowercase and singular */}
//   <Route path="/pcs" element={<ShopCategory banner={pc_banner} category="pcs" />} />
//   <Route path="/Laptop" element={<ShopCategory banner={labtop_banner} category="Laptop" />} />
//   <Route path="/gaming" element={<ShopCategory category="gaming" />} />
//   <Route path="/keyboard" element={<ShopCategory category="keyboard" />} />
//   <Route path="/mouse" element={<ShopCategory  category="mouse" />} />
//   <Route path="/headphones" element={<ShopCategory banner={headset_banner} category="headphones" />} />
//   <Route path="/monitor" element={<ShopCategory category="monitor" />} />
//   <Route path="/charges" element={<ShopCategory category="charges" />} />
//   <Route path="/pageOfItem/:productId" element={<PageOfItem  />} />
  
// </Routes>

//   <Footer/>
//    </BrowserRouter>
