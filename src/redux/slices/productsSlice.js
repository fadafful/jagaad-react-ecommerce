import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://my-json-server.typicode.com/fadafful/jsonplaceholder/db");
  const products = await response.json();
  console.log(products);
  return products;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  }
});

//export const productsSelector = (state) => state.products.items;
//export const loadingSelector = (state) => state.products.loading;

export default productsSlice.reducer;