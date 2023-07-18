import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((error) => console.error('Error fetching products:', error));
}, []);


  return (
    <div>
      {items.map((current) => (
        <div key={current.id} className="product">
          <span id={current.id} className="product-row-1">
            <img src={current.img} alt={current.brand} className="productImg" />
          </span>
          <span className="product-row-1">
            <h2>{current.brand}</h2>
          </span>
          <span className="product-row-1">
            <h4>{current.desc}</h4>
          </span>
          <span className="product-row-1">
            <h5>{current.price}</h5>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;