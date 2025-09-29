import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


export default function Products() {
  const productList = [
    { name: "Carburetor", price: "₹5000", img:"/images/carburetor.jpg", },
    { name: "Cylinder Head", price: "₹6999", img:"/images/cylinderhead.jpg",},
    { name: "Crank Shaft", price: "₹2999", img:"/images/crankshaft.jpg", },
    { name: "Piston", price: "₹3999", img:"/images/piston.jpg", },
    { name: "Engine Valve", price: "₹2999", img:"/images/enginevalve.jpg", },
    { name: "Spark Plug", price: "₹299", img:"/images/sparkplug.jpg", },
    { name: "Connecting Rod", price: "₹499", img:"/images/connecting rod.jpg", },
    { name: "Gear Set", price: "₹3000", img:"/images/gearset.jpg", }
    
  ];

  return (
    <Container id="products" className="my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        {productList.map((product, i) => (
          <Col md={3} key={i}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
   <button className="btn btn-primary" >
      Buy Now
    </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
