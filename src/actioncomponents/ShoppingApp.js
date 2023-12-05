// ShoppingApp.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './shoppingcart';

const ShoppingApp = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update its quantity
      updateCart(product.id, 1);
    } else {
      // Otherwise, add the product to the cart with its details
      setCart([
        ...cart,
        {
          id: product.id,
          model: product.malli,
          price: product.hinta,
          quantity: 1,
        },
      ]);
    }
  };

  const updateCart = (productId, quantityChange) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + quantityChange }
        : item
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const checkout = async () => {
    // Implement checkout logic here
    try {
      const response = await fetch('http://localhost:3001/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        console.log('Order placed successfully!');
        setCart([]);
      } else {
        console.error('Failed to place order:', response.statusText);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} updateCart={updateCart} checkout={checkout} />
    </div>
  );
};

export default ShoppingApp;
