import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
         <img src="/images/enginespares.png"  height="40" width="40" alt="logo" className="img-fluid rounded"/>
         
        <Navbar.Brand href="#home">Engine Spares</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
