// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products";
import Filters from "./components/filters";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Authorization from "./actioncomponents/Authorization";
import Register from "./actioncomponents/Register";
import AddProduct from "./actioncomponents/AddProduct";

function App() {
  const [filters, setFilters] = useState({
    merkki: '',
    korimalli: '',
    vari: '',
    kayttovoima: '',
    hinta: '',
  });

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Jos tuote on jo ostoskorissa, päivitä sen määrää
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.hinta }
          : item
      );

      setCart(updatedCart);
    } else {
      // Muuten lisää uusi tuote ostoskoriin
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1, total: product.hinta }
      ]);

      // Näytä lisätty ostoskoriin -viesti
      toast.success('Lisätty ostoskoriin', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity, total: newQuantity * item.hinta }
          : item
      )
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className='content'>
        <Filters
          filters={filters}
          onFilterChange={(filterType, selectedValue) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              [filterType]: selectedValue,
            }));
          }}
          onClearFilters={() => {
            setFilters({
              merkki: '',
              korimalli: '',
              vari: '',
              kayttovoima: '',
              hinta: '',
            });
          }}
        />
        <div>
          <Routes>
            <Route
              path=""
              element={<Products filters={filters} addToCart={addToCart} />}
            />
            <Route
              path="shoppingcart"
              element={
                <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                emptyCart={emptyCart}
              />
              }
            />
            <Route path="" element={<Products filters={filters} />} />
            <Route path="contact"  element={<Contact />} />
            <Route path="login" element={<Authorization />} />
            <Route path="register" element={<Register />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
