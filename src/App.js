import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products"
import ShoppingApp from "./actioncomponents/ShoppingApp";

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Navbar/>
        <ShoppingApp/>;
      </div>
      <div class="dropandcontent">
      <div>
        <Dropdown/>
      </div>
      <div>
        <Products />
      </div>
      </div>
      <div>
        
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
