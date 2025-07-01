import React, { useState } from 'react';
import all_product from '../Assets/all_product';
import Card from '../../page/Card';
import "./Search.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = all_product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='thecover-of-card2'>
      <input
        type="text"
        placeholder='Search'
        id='searchBar'
        name='searchBar'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='flex2'>
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
