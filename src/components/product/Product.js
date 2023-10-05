import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }

  media only screen and (min-width: 1200px) and (max-width: 1920px) {
    Container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Product = () => {
  const product = useProduct(); // Access product using the custom hook

  return (
    <Container>
      {product.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product">
            <img src={product.images[4]} alt={product.name} />
            <p>{product.name}</p>
            <p>RS. {product.price}</p>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Product;
