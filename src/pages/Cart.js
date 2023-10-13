import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);

  return (
    <div>
      {cartProducts.length > 0 ? (
        cartProducts.map((cartProduct, index) => (
          <div key={index}>
            <h1>{cartProduct.name}</h1>
            <p>Price: ${cartProduct.price}</p>
            <p>Description: {cartProduct.description}</p>
          </div>
        ))
      ) : (
        <p>No Item</p>
      )}
    </div>
  );
}

export default Cart;
