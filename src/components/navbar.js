import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  return (
    <div className="navbar">
      <Navbar bg="light" data-bs-theme="light">
        <Nav className="me-auto">
          <Nav.Link href="#home">Etusivu</Nav.Link>
        </Nav>

        <Nav className="cart">
          <Nav.Link href="#features">Ota yhteyttä</Nav.Link>
          <Nav.Link href="#features">Kirjaudu</Nav.Link>
          <Nav.Link href="#home">Ostoskori <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
