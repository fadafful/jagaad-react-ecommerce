import React from "react";
import styled from "styled-components";
import { useProduct } from "../../context/ProductContext";

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #816dfa;
  background-color: ${(props) => props.backgroundcolor};
  cursor: pointer;
`;

const ColorButtons = ({ productId }) => {
  const product = useProduct();

  // Find the selected product based on productId
  const selectedProduct = product.find((p) => p.id === productId);

  if (!selectedProduct) {
    return <div>Product not found</div>; // Handle the case when the product is not found
  }

  // Check if the selected product has colors
  if (!selectedProduct.colors || selectedProduct.colors.length === 0) {
    return <div>No available colors for this product</div>;
  }

  return (
    <div>
      {selectedProduct.colors.map((color, index) => (
        <Button key={`${color}-${index}`} backgroundcolor={color} />
      ))}
    </div>
  );
};

export default ColorButtons;
