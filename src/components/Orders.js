import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const markAsCleared = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = "cleared";
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <Container className="mt-5">
      <h2>My Orders</h2>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order, index) => (
        <div key={index} className="border p-3 mb-3">
          <h5>Order #{index + 1} - {order.status.toUpperCase()}</h5>
          <p>Date: {order.date}</p>
          {order.products.map((product, i) => (
            <Row key={i} className="align-items-center mb-2">
              <Col md={2}>
                <Image src={product.img || "/images/default-product.png"} fluid rounded />
              </Col>
              <Col md={6}>{product.name}</Col>
              <Col md={2}>Qty: {order.quantities[i]}</Col>
              <Col md={2}>₹{product.price * order.quantities[i]}</Col>
            </Row>
          ))}
          <h6>Total: ₹{order.totalPrice}</h6>
          {order.status === "pending" && (
            <Button variant="success" onClick={() => markAsCleared(index)}>
              Mark as Cleared
            </Button>
          )}
        </div>
      ))}
    </Container>
  );
}
