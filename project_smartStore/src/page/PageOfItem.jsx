import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Laptop from '../components/Laptop/Laptop';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import Pc_gaming from '../components/Pc_gaming/Pc_gaming';
import Pc from '../components/Pc/Pc';
import Keyboard from "../components/Keyboard/Keyboard"

const PageOfItem = () => {
  const [data, setData] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);

    // Fetch product data
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [productId]);

  const product = data.find((item) => item.id === Number(productId));

  // Loading state
  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading product...</h2>;
  }

  // Show Laptop product page
  if (product.category === "Laptop") {
    return (
      <div>
        <Laptop product={product} />
        <RelatedProducts product={product} />
      </div>
    );
  }
  if(product.category==="Laptop_gaming"){
  return (
      <div>
        <Laptop product={product} />
        <RelatedProducts product={product} />
      </div>
    );
  }
    if(product.category==="pcs_gaming"){
  return (
      <div>
        <Pc_gaming product={product} />
        <RelatedProducts product={product} />
      </div>
    );
  }
   if(product.category==="pcs"){
  return (
      <div>
        <Pc product={product} />
        <RelatedProducts product={product} />
      </div>
    );
  }
  if(product.category==="keyboard" ||product.category==="mouse"){
  return (
      <div>
        <Keyboard product={product} />
        <RelatedProducts product={product} />
      </div>
    );
  }

  return (
    <div>
      <h2>No template for category: {product.category}</h2>
    </div>
  );
};

export default PageOfItem;
