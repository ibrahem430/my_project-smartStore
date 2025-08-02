import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import ThePageOfItem from '../componant/ThePageOfItem/ThePageOfItem';

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

    return (
      <div>
        <ThePageOfItem product={product} />
        {/* <RelatedProducts product={product} /> */}
      </div>
    );
  


  return (
    <div>
      <h2>No template for category: {product.category}</h2>
    </div>
  );
};

export default PageOfItem;
