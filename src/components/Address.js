import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (location.state?.products) {
      setProducts(location.state.products);
      setQuantities(location.state.quantities || location.state.products.map(() => 100));
    } else {
      navigate("/"); // no product selected, go home
    }
  }, [location.state, navigate]);

  const totalPrice = products.reduce(
    (total, product, index) => total + product.price * quantities[index],
    0
  );

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Number(value);
    setQuantities(newQuantities);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const order = { products, quantities, totalPrice };
    localStorage.setItem("currentOrder", JSON.stringify(order));
    navigate("/payment", { state: order });
  };

  return (
    <div className="container mt-5">
      <h2>Shipping Address</h2>
      <form onSubmit={handleAddressSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" required />
        </div>

        <h4 className="mt-4">Select Quantity</h4>
        {products.map((product, index) => (
          <div key={index} className="mb-3 d-flex align-items-center">
            <label className="form-label me-3">
              {product.name} (₹{product.price})
            </label>
            <select
              className="form-select w-auto"
              value={quantities[index]}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={(i + 1) * 100}>
                  {(i + 1) * 100}
                </option>
              ))}
            </select>
          </div>
        ))}

        <h5 className="mt-3">Total Price: ₹{totalPrice}</h5>

        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
