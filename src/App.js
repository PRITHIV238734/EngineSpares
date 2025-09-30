import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar";
import HomeComponents from "./components/HomeComponents";
import Products from "./components/Products";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Orders from "./components/Orders";


function App() {
  return (
    <>
      <Navigation /> {/* Navbar always visible */}
       {/* Footer always visible */}
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
