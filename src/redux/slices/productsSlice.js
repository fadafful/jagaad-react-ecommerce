import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/productsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    items: []
  },
  reducers: {
    addToCart(state, action) {
      state.items.push({
        id: action.payload.id,
        images: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description,
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items.push(...action.payload);
      state.loading = false;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.item = [];
      state.loading = false;
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
  }
});

export const { addToCart } = todosSlice.actions;
export const productsSelector = (state) => state.products.items;
export const loadingSelector = (state) => state.products.loading;

export default productsSlice.reducer;