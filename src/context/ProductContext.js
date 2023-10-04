import React, { createContext, useContext, useState } from "react";
import IMG1 from "../images/IMG1.png";
import IMG2 from "../images/IMG2.png";
import IMG3 from "../images/IMG3.png";
import IMG4 from "../images/IMG4.png";
import IMG1_1 from "../images/IMG1_1.png";
import IMG1_2 from "../images/IMG1_2.png";
import IMG1_3 from "../images/IMG1_3.png";
import IMG1_4 from "../images/IMG1_4.png";

// Create a context
const ProductContext = createContext();

// Create a provider component
const ProductProvider = ({ children }) => {
  // Placeholder data for product
  const initialProduct = [
    {
      id: 1,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG1],
      name: "Product 1",
      price: 10,
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      colors: [
        "rgba(129, 109, 250, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(205, 186, 123, 1)",
      ],
      sizes: ["L", "XL", "XS"],
    },
    {
      id: 2,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG2],
      name: "Product 2",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG3],
      name: "Product 3",
      price: 30,
      description: "Description for Product 3",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG4],
      name: "Product 2",
      price: 20,
      description: "Description for Product 2",
    },
    // Add more product as needed
  ];

  // State to hold the product
  const [product] = useState(initialProduct);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the product
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export { ProductContext, ProductProvider };
