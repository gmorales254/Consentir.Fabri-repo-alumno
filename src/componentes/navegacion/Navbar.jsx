import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {CartWidget} from "./componentes/CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/'>
          {" "}
          <img
            className="logo"
            alt="logo consentir"
            widht="60"
            height=" 60"
            src="/assets/Imagenes/MARCA.png"
          />{" "}
        </Link>
        <Link className="nav-link" to='/'>Consentir</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to='/Nosotras'>Nosotras</Link>
            <Link className="nav-link" to='/Blends'>Blends</Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
            <Link className="nav-link" to="/Box">
                Nuestros Box
              </Link>
              <Link className="nav-link" to="/Ceramica">Ceramica</Link>
              <Link className="nav-link" to="/Recargas">Recargas</Link>
              <NavDropdown.Divider />
              <Link className="nav-link" to="/Servicios">Servicios</Link>
            </NavDropdown>
            <Link className="nav-link" to="/Contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="nav navbar-nav navbar-right">
       <Link to="/CartWidget">{<CartWidget/>}</Link>
      </div>
    </Navbar>
  );
}

export default NavBar;
