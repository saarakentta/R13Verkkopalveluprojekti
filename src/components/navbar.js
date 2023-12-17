import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  return (
    <div className="navbar">
      <Navbar bg="light" data-bs-theme="light">
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="navbarLink" to="/">
              Etusivu
            </Link>
          </Nav.Link>
        </Nav>

        <Nav className="cart">
          <Nav.Link>
            <Link className="navbarLink" to="/contact">
              Ota yhteyttä
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navbarLink" to="/addProduct">
              Lisää tuote
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navbarLink" to="/login">
              Kirjaudu
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navbarLink" to="/register">
              Rekisteröidy
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navbarLink" to="/shoppingcart">
              Ostoskori <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
