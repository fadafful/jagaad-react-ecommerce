// Contact.js and Contact.js
import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";

const Contact = () => {

  const [products, setProducts] = useState(false); // State for products

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/fadafful/jsonplaceholder/db')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);
  console.log(products);

  return (
    <div>
      <Hero />
      <h2>Contact Us</h2>
      <p>Our story...</p>
    </div>
  );
};

export default Contact;
