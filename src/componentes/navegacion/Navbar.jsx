import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
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
       <Link to="/CartWidget"><Button className= "m-3" type="button" variant="primary" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">  
           <path d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
           </svg></Button ></Link>
      </div>
    </Navbar>
  );
}

export default NavBar;
