import { addToCart } from "../redux/slices/cartSlices";

export const addToCartAsync = (product) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/fadafful/jsonplaceholder/db"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setTimeout(() => {
        dispatch(addToCart(product));
      }, 1000); //
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
};
