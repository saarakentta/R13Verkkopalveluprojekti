import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";


function AppDropdown() {
    return (
      <>

<Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Merkki
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">Audi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">BMW</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Mercedes Benz</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Käyttövoima
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">Bensiini</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Diesel</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Korimalli
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">Sedan</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Farmari</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pakettiauto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Väri
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">Musta</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Valkoinen</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Punainen</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sininen</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Hopea</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Vuosimalli
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">2010 - 2015</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2016 - 2020</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2020 -</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
  
        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Hinta
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2">5000 - 10 000€</Dropdown.Item>
            <Dropdown.Item href="#/action-3">10 000 - 20 000€</Dropdown.Item>
            <Dropdown.Item href="#/action-3">yli 20 000€</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </>
    );
  }

  export default AppDropdown;