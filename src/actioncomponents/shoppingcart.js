// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, updateCart, removeItem, checkout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.map((item) => (
        <div key={item.rekisteritunnus} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateCart(item.rekisteritunnus, -1)}>Remove One</button>
        </div>
      ))}
      <button onClick={checkout} style={{ marginTop: '10px' }}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
