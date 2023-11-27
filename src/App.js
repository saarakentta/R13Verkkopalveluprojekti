import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";
import Products from "./components/products"

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Navbar/>
        <ShoppingCart/>;
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
