import React, { useState, useEffect } from 'react';
import Card from '../../page/Card';
import "./RelatedProducts.css";

function RelatedProducts({ product }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [product]);

  return (
    <div className='thecover-of-card2'>
      <h2 className="related-title">Related Products</h2>
      <div className='flex2'>
        {data.map((item) => {
          if (item.type === product.type && item.id !== product.id) {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.new_price}
                image={`http://localhost:5000/image/${item.image}`}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
