// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity, emptyCart }) => {
  // Calculate the total price of the shopping cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div>
      <h2>Ostoskori</h2>
      <button onClick={emptyCart}>Tyhjennä ostoskori</button>
      {cart && cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.malli}</h3>
          <p>Hinta: {item.hinta}€</p>
          <p>Määrä: {item.quantity}</p>
          <p>Yhteensä: {item.total}€</p>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            Vähennä
          </button>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            Lisää
          </button>
          <button onClick={() => removeFromCart(item.id)}>Poista</button>
        </div>
      ))}
      
    </div>
  );
};

export default ShoppingCart;
