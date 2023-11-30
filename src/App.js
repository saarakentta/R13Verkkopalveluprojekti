import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products";
import ShoppingApp from "./actioncomponents/ShoppingApp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div class='content'>
        <Dropdown />
        <div>
          <Routes>
            <Route path="" element={<Products />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
