import React from "react";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3%;
  margin-bottom: 0.8rem;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(250, 244, 244, 1);
  border: 1px solid rgba(250, 244, 244, 1);
  cursor: pointer;

  &:focus {
    background-color: rgba(251, 235, 181, 1);
    border: 1px solid rgba(251, 235, 181, 1);
  `;

const SizeButtons = ({ productId }) => {
  const product = useProduct();

  // Find the selected product based on productId
  const selectedProduct = product.find((p) => p.id === productId);

  if (!selectedProduct) {
    return null; // Handle the case when the product is not found
  }

  return (
    <div>
      <p className="selected-product-size-text">Size</p>
      <Container>
        {selectedProduct.sizes.map((size) => (
          <Button key={size}>{size} </Button>
        ))}
      </Container>
    </div>
  );
};

export default SizeButtons;
