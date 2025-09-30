import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)`,
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
  };

  return (
    <div style={heroStyle} id="home">
      <div className="hero-overlay"></div>
      <Container className="text-center hero-content">
        <h1>Welcome to Engine Spares</h1>
        <p>Your trusted source for quality products</p>
        <Button variant="light" href="#products">View Products</Button>
      </Container>
    </div>
  );
}
