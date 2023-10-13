import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, description } = action.payload; // Extract the desired information
      state.push({ id, name, price, description, completed: false });
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
