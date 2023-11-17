import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";


function AppDropdown() {
    return (
      <>
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