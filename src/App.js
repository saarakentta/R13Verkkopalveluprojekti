import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Content from "./components/content";
import Footer from "./components/footer";
import ShoppingCart from "./actioncomponents/shoppingcart";

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Navbar/>;
      </div>
      <div>
        <Dropdown/>
      </div>
      <div>
        <Content/>
      </div>
      <div>
        <ShoppingCart/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
