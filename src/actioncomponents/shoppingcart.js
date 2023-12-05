// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, updateCart, checkout }) => {
  // Calculate the total price of the shopping cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.malli}</h3>
          <p>Hinta: {item.price}€</p>
          <p>Määrä: {item.quantity}</p>
          <p>Yhteensä: {item.price * item.quantity}€</p>
          <button onClick={() => updateCart(item.id, -1)}>Poista</button>
        </div>
      ))}
      <p>Yhteishinta: {calculateTotalPrice()}€</p>
      <button onClick={checkout} style={{ marginTop: '10px' }}>Kassalle</button>
    </div>
  );
};

export default ShoppingCart;
