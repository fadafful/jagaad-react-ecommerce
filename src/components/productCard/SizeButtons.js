import React from "react";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";

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
      {selectedProduct.sizes.map((size) => (
        <Button key={size}>{size} </Button>
      ))}
    </div>
  );
};

export default SizeButtons;
