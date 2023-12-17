// ShoppingCart.js
import React, { useState } from 'react';
import { jwtToken } from '../components/signals/TokenSignal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity, emptyCart }) => {
  const [notification, setNotification] = useState(null);
  const showNotification = (message) => {
    setNotification(message);

    //Piilota ilmoitus 3 sekunnin kuluttua
    setTimeout(() => {
      setNotification(null);
    }, 3000)
  }

  function order() {

    const token = jwtToken.value;

    if (!token) {
      console.error('Käyttäjä ei ole kirjautunut.');
      showNotification('Kirjaudu sisään tehdäksesi tilauksen.');
      return;
    }

    try {
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
          showNotification('Tilauksesi on vastaanotettu. Kiitos!');
        })
        .catch((error) => {
          console.error('Virhe tilauksen lähetyksessä:', error.message);
          showNotification('Virhe tilauksen lähetyksessä, yritä myöhemmin uudelleen.');
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
      {cart && cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.malli}</h3>
          <p>Hinta: {item.hinta}€</p>
          <p>Määrä: {item.quantity}</p>
          <p>Yhteensä: {item.total}€</p>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
            Vähennä
          </button>
          <button className='lisaa' onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            Lisää
          </button>
          <button className='poista' onClick={() => removeFromCart(item.id)}>Poista</button>
        </div>
      ))}
      <div>
        <button className='empty' onClick={emptyCart}>Tyhjennä ostoskori</button>
        <button className='send' onClick={order}>Lähetä tilauksesi</button>
        {notification && <div style={{ fontSize: '20px', color: 'green', marginLeft: '10px', marginBottom: '5px' }}>{notification}</div>}
      </div>
    </div>
  );
};

export default ShoppingCart;
