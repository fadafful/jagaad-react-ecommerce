import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";
import Hero from "../hero/Hero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: 0 5rem;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #000;
  }

  .product-name {
    font-size: 1rem;
    font-weight: 600;
  }

  .product-price {
    font-size: 1rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Product = () => {
  const product = useProduct(); // Access product using the custom hook

  return (
    <>
      <Hero />
      <Container>
        {product.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <img src={product.images[4]} alt={product.name} />
              <p className="product-name">{product.name}</p>
              <p className="product-price">RS. {product.price}</p>
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Product;
