import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // Add more slices here for your application
  },
});

export default store;