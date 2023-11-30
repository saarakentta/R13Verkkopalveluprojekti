import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  return (
    <div className="navbar">
      <Navbar bg="light" data-bs-theme="light">
        <Nav className="me-auto">
          <Nav.Link>
          <Link to="/">Etusivu</Link>
          </Nav.Link>
        </Nav>

        <Nav className="cart">
          <Nav.Link href="#features">Ota yhteyttä</Nav.Link>
          <Nav.Link href="#features">Kirjaudu</Nav.Link>
          <Nav.Link>
          <Link to="/shoppingcart">
            Ostoskori <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
