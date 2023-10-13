import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import SizeButtons from "./SizeButtons";
import ColorButtons from "./ColorButtons";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const Breadcumb = styled.div`
  nav {
    display: flex;
    gap: 1rem;
    margin: 4% 0;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  .production-description-name {
    font-size: 3rem;
    font-weight: 400;
    margin-top: 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #9f9f9f;
  }

  .product-description-stars-text {
    color: rgba(159, 159, 159, 1);
    font-size: 0.8rem;
    font-weight: 400;
  }

  .product-description-text {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
  }

  .selected-product-color-text {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    margin-bottom: 4%;
  }

  .product-card-info {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    border-top: 1px solid rgba(159, 159, 159, 0.2);
    padding-top: 4%;
  }

  .product-add-btn {
    display: flex;
    gap: 3%;
    margin-bottom: 10%;
  }

  .product-add-btn button {
    border-radius: 10px;
    border: 1px solid #000;
    padding: 0.5rem 1.5rem;
    background-color: #fff;
  }

  .product-share-icons span {
    display: inline-flex;
    gap: 5%;
    color: black;
    width: 50%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;

    .product-card {
      width: 50%;
    }

    .product-description {
      width: 30%;
    }

    .product-description-text {
      font-size: 0.8rem;
      font-weight: 400;
    }

    img {
      width: 150%;
      background-size: cover;
      background-color: #fff9e5;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 4rem;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProductCard = () => {
  const { id } = useParams();
  const productData = useProduct(); // Access product using the custom hook
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product) {
      // Prevent adding the product if it's not found
      return;
    }

    // Create an object with product information to add to the cart

    // Dispatch the addToCart action with the product object
    dispatch(addToCart(product));
  };

  // Find the product with the specified ID
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-card">
      <Breadcumb>
        <nav className="product-breadcrumb">
          <Link to="/">Home</Link> {">"}
          <Link to="/shop">Shop</Link> {">"} &nbsp; | <p>{product.name}</p>
        </nav>
      </Breadcumb>

      <Container>
        {/* Image */}
        <ImageContainer>
          {product.images.map((image, index) => (
            <div
              className="product-image"
              key={index}
              style={{
                gridColumn: index === 4 ? "2" : "1",
                gridRow: index === 4 ? "1 / span 4" : `auto`,
              }}
            >
              <img src={image} alt={`${index + 1}`} />
            </div>
          ))}
        </ImageContainer>

        {/* Product Description */}
        <div className="product-description">
          <h1 className="production-description-name">{product.name}</h1>
          <h3 className="product-price">${product.price}</h3>
          <div className="product-rating">
            {/* Render the star ratings here */}
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />

            <span className="product-description-stars-text">
              | 5 Customer Reviews
            </span>
          </div>
          <p className="product-description-text">{product.description}</p>

          {/* Size Buttons */}
          <SizeButtons productId={product.id} />

          {/* Color Buttons */}
          <ColorButtons productId={product.id} />

          {/* Add to Cart Button */}
          <div className="product-add-btn">
            <button className="product-add-product"> - 1 + </button>
            <button className="product-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          {/* Product Details */}
          <div className="product-card-info">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>
              Tags: {Array.isArray(product.tags) ? product.tags.join(", ") : ""}
            </p>

            {/* Share Icons */}
            <div className="product-share-icons">
              {/* Include social media sharing icons here */}
              <p>
                Share:
                <span>
                  <FaFacebook />
                  <FaLinkedin />
                  <AiFillTwitterCircle />
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductCard;
