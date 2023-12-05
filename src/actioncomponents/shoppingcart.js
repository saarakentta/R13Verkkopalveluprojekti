// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, updateCart, removeItem, checkout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.id}</h3>
          <p>Korissa: {item.malli}</p>
          <button onClick={() => updateCart(item.id, -1)}>Remove One</button>
        </div>
      ))}
      <button onClick={checkout} style={{ marginTop: '10px' }}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
