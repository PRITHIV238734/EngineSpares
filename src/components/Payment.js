import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [order, setOrder] = useState({
    products: [],
    quantities: [],
    totalPrice: 0,
  });

  // Load order from Address page or localStorage
  useEffect(() => {
    if (location.state?.products) {
      const totalPrice = location.state.products.reduce(
        (sum, product, i) =>
          sum + Number(product.price) * Number(location.state.quantities[i]),
        0
      );
      setOrder({ ...location.state, totalPrice });
      localStorage.setItem(
        "currentOrder",
        JSON.stringify({ ...location.state, totalPrice })
      );
    } else {
      const savedOrder = localStorage.getItem("currentOrder");
      if (savedOrder) setOrder(JSON.parse(savedOrder));
    }
  }, [location.state]);

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();

    if (!order.products || order.products.length === 0) {
      alert("No products in the order!");
      return;
    }

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add new order with status 'pending'
    const newOrder = {
      products: order.products,
      quantities: order.quantities,
      totalPrice: order.products.reduce(
        (sum, product, i) =>
          sum + Number(product.price) * Number(order.quantities[i]),
        0
      ),
      date: new Date().toLocaleString(),
      status: "pending",
    };

    // Save updated orders
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Clear current order
    localStorage.removeItem("currentOrder");

    alert(`Payment of ₹${newOrder.totalPrice} Successful! ✅`);

    // Redirect to Orders page
    navigate("/orders");
  };

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>

      {order.products.length === 0 ? (
        <p>No order found. Please add products to cart first.</p>
      ) : (
        <>
          <h5 className="mb-3">Order Summary:</h5>
          {order.products.map((product, index) => (
            <Row key={index} className="align-items-center mb-3">
              <Col md={2}>
                <Image
                  src={product.img || "/images/default-product.png"}
                  fluid
                  rounded
                />
              </Col>
              <Col md={6}>
                <p className="mb-1">{product.name}</p>
              </Col>
              <Col md={2}>
                <p className="mb-1">Qty: {order.quantities[index]}</p>
              </Col>
              <Col md={2}>
                <p className="mb-1">
                  ₹{Number(product.price) * Number(order.quantities[index])}
                </p>
              </Col>
            </Row>
          ))}

          <h5>
            Total: ₹
            {order.products.reduce(
              (sum, product, i) =>
                sum + Number(product.price) * Number(order.quantities[i]),
              0
            )}
          </h5>

          <form onSubmit={handlePayment} className="mt-4">
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input type="month" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input type="password" className="form-control" required />
            </div>

            <Button
              type="button"
              variant="secondary"
              className="me-2"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button type="submit" variant="success">
              Pay Now
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
