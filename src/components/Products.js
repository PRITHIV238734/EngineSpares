import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  const productList = [
    { name: "Carburetor", price: "5000", img:"/images/carburetor.jpg" },
    { name: "Cylinder Head", price: "6999", img:"/images/cylinderhead.jpg" },
    { name: "Crank Shaft", price: "2999", img:"/images/crankshaft.jpg" },
    { name: "Piston", price: "3999", img:"/images/piston.jpg" },
    { name: "Engine Valve", price: "2999", img:"/images/enginevalve.jpg" },
    { name: "Spark Plug", price: "299", img:"/images/sparkplug.jpg" },
    { name: "Connecting Rod", price: "499", img:"/images/connecting rod.jpg" },
    { name: "Gear Set", price: "3000", img:"/images/gearset.jpg" }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Avoid duplicates, add product only once
    if (!cart.find(p => p.name === product.name)) {
      setCart([...cart, product]);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Please add at least one product to cart.");
      return;
    }
    // Pass cart to Address page
    navigate("/address", { state: { products: cart } });
  };

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
                <Card.Text>₹{product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cart.length > 0 && (
        <div className="text-center mt-3">
          <Button variant="success" onClick={handleCheckout}>
            Checkout ({cart.length} item{cart.length > 1 ? "s" : ""})
          </Button>
        </div>
      )}
    </Container>
  );
}
