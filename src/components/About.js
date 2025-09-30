import React from 'react';  
import { Container, Row, Col } from 'react-bootstrap';


export default function About() {
  return (
    <Container id="about" className="my-5">
      <h2 className="text-center mb-4">About Engine Spares</h2>
      <Row>
        <Col md={6}>
          <p>Engine Spares is committed to delivering top-quality electronic products to customers across the globe.
We strive to provide innovative solutions that meet the ever-evolving needs of modern technology.
Our mission is to combine cutting-edge innovation with reliability and affordability in every product.
Customer satisfaction is at the heart of everything we do, guiding our service and product quality.
We carefully source materials and components to ensure durability and long-lasting performance.
Our dedicated team works tirelessly to design products that are both efficient and user-friendly.
We embrace the latest technology trends to bring practical and innovative solutions to our clients.
Integrity, transparency, and trust form the foundation of our business relationships worldwide.
We continually seek to improve, adapting to market demands and customer feedback.
At Engine Spares, our goal is to empower our customers with electronics that enhance their daily lives..</p>
        </Col>
        <Col md={6}>
          <img src="/images/enginespares.png"  height="300" width="300" alt="About" className="img-fluid rounded"/>
        </Col>
      </Row>
    </Container>
  );
}
