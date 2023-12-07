// ShoppingApp.js
import React, { useState, useEffect } from 'react';
import Products from '../components/products';
import ShoppingCart from './shoppingcart';

const ShoppingApp = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      updateCart(product.id, 1);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          malli: product.malli,
          price: product.hinta,
          quantity: 1,
        },
      ]);
    }
  };

  const updateCart = (productId, quantityChange) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
        : item
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const checkout = async () => {
    try {
      console.log('Sending checkout request:', JSON.stringify(cart));

      const response = await fetch('http://localhost:3001/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      console.log('Checkout response:', response);

      if (response.ok) {
        console.log('Order placed successfully!');
        setOrderStatus('Order placed successfully!');
        setCart([]);

        setTimeout(() => {
          setOrderStatus('');
        }, 3000);
      } else {
        const errorMessage = await response.text();
        console.error('Failed to place order:', errorMessage);
        setOrderStatus(`Failed to place order: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      setOrderStatus(`Error during checkout: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Pass the addToCart function to the Products component */}
      <Products products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} updateCart={updateCart} checkout={checkout} />
      {cart.length === 0 && !orderStatus && <p>Cart is empty</p>}
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
};

export default ShoppingApp;
