import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react'
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products";
import ShoppingApp from "./actioncomponents/ShoppingApp";
import Contact from "./components/contact";
import Login from "./actioncomponents/login";
import Filters from "./components/filters"
import { Route, Routes, Link } from "react-router-dom";

function App() {

  const [filters, setFilters] = useState({
    merkki: '',
    korimalli: '',
    vari: '',
    kayttovoima: '',
    hinta: '',
  });

  const handleFilterChange = (filterType, selectedValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedValue,
    }));
  }

  const handleClearFilters = () => {
    setFilters({
      merkki: '',
      korimalli: '',
      vari: '',
      kayttovoima: '',
      hinta: '',
    })
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className='content'>
      <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters} />
        <div>
          <Routes>
            <Route path="" element={<Products filters={filters} />} />
            <Route path="shoppingcart" element={<ShoppingApp />} />
            <Route path="contact"  element = {<Contact />} />
            <Route path="login" element = {<Login />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
