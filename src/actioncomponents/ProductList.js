// ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{product.merkki} - {product.malli}</h3>
          <p>Price: {product.hinta}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
