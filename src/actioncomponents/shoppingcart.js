// Import necessary dependencies
import React, { useState } from 'react';

// Create a functional component for the shopping cart
const ShoppingCart = () => {
  // Set up state to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      
      {/* Display the list of items in the cart */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Display the total price of items in the cart */}
      <p>Total: ${calculateTotal()}</p>

      {/* Example products */}
      <h2>Available Products</h2>
      <button onClick={() => addItemToCart({ name: 'Product 1', price: 10.99 })}>
        Add Product 1 to Cart
      </button>
      <button onClick={() => addItemToCart({ name: 'Product 2', price: 20.49 })}>
        Add Product 2 to Cart
      </button>
    </div>
  );
};

export default ShoppingCart;