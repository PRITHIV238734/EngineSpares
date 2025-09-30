import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle click on Home / About / Products / Contact
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Navigate to homepage first, then scroll
      navigate("/");
      setTimeout(() => scrollToSection(id), 100); // small delay to ensure DOM rendered
    } else {
      scrollToSection(id);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <img src="/images/enginespares.png" height="40" width="40" alt="logo" className="img-fluid rounded" />
        <Navbar.Brand onClick={() => handleNavClick("home")}>Engine Spares</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("products")}>Products</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("about")}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("contact")}>Contact</Nav.Link>
            <Nav.Link as={RouterLink} to="/orders">Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
