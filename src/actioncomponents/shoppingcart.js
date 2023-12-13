// ShoppingCart.js
import React from 'react';
import { jwtToken } from '../components/signals/TokenSignal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity, emptyCart }) => {
  // Calculate the total price of the shopping cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0);
  };

  function order() {

    const token = jwtToken.value;

    if (!token) {
      console.error('Käyttäjä ei ole kirjautunut.');
      return;
    }

    try{
      const decodedToken = jwtDecode(token);
      const customerId = decodedToken.customerId;

    const orderData = {
      customer_id: customerId,
      products: cart.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    }
    // Lähetä tilaus tietokantaan
    axios
    .post("http://localhost:3001/order", orderData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      console.log('Tilaus lähetetty onnistuneesti. ID:', resp.data.orderId);
      emptyCart();

    })
    .catch((error) => {
      console.error('Virhe tilauksen lähetyksessä:', error.message);
      // Käske käyttäjää yrittämään uudelleen tai näytä virheilmoitus
    });

} catch (error) {
  console.error('Virhe purkaessa JWT-tokenia:', error.message);
  // Käske käyttäjää yrittämään uudelleen tai näytä virheilmoitus
}
}

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
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}disabled={item.quantity <= 1}>
            Vähennä
          </button>
          <button className='lisaa' onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            Lisää
          </button>
          <button className='poista' onClick={() => removeFromCart(item.id)}>Poista</button>
        </div>
      ))}
      <div>
      <button onClick={emptyCart}>Tyhjennä ostoskori</button>
      <button className='send' onClick={order}>Lähetä tilauksesi</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
