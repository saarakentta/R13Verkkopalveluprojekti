import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products";
import ShoppingApp from "./actioncomponents/ShoppingApp";
import Contact from "./components/contact";
import Login from "./actioncomponents/login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

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
      <div class='content'>
        <Dropdown />
        <div>
          <Routes>
            <Route path="" element={<Products />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
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
