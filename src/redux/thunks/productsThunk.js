import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://my-json-server.typicode.com/fadafful/jsonplaceholder/db");
  const products = await response.json();
  console.log(products);
  return products;
});