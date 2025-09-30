import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomeComponents() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="products"><Products /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
