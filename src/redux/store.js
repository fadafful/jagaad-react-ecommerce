import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";

const store = configureStore({
  reducer: { cartProducts: cartReducer },
});

export default store;
