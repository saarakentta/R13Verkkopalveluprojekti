// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, updateCart, checkout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && Object.keys(cart).map((productId) => (
        <div key={productId} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{cart[productId].name}</h3>
          <p>Quantity: {cart[productId].quantity}</p>
          <button onClick={() => updateCart(productId, -1)}>Remove One</button>
        </div>
      ))}
      <button onClick={checkout} style={{ marginTop: '10px' }}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
