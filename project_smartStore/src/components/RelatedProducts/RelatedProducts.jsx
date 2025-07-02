import React, { useState ,useEffect} from 'react'
import all_product from '../Assets/all_product'
import Card from '../../page/Card'
import "./RelatedProducts.css"

function RelatedProducts({ product }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);

    // Fetch product data
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [product]); 

  return (
    <div className='thecover-of-card2'>
    <div className='flex2'>
       {data.map((item,i)=>{
        if(item.name.split(" ")[1] ===product.name.split(" ")[1]&&item.id!==product.id)
        return (  
         <Card
        key={item.id}
        id={item.id}
        name={item.name}
       price={item.new_price}
        image={item.image}  
      />) 
       })}
    </div>
    </div>
  )
}

export default  RelatedProducts
