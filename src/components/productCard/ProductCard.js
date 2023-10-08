import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import SizeButtons from "./SizeButtons";
import ColorButtons from "./ColorButtons";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #9f9f9f;
  }

  .product-description {
    padding: 1rem;
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

  .selected-product-size-text {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    margin-bottom: 0.5rem;
  }

  .selected-product-color-text {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
    margin-bottom: 0.5rem;
  }

  .product-card-info {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(159, 159, 159, 1);
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
     {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .product-description-text {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  grid-template-rows: repeat(4, 1fr); /* Four rows */
  gap: 10px; /* Adjust the gap between images */
  height: 100%; /* Ensure the container takes the full height */

  media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProductCard = () => {
  const { id } = useParams();
  const productData = useProduct();
  const product = productData.find((p) => p.id === parseInt(id));

  const [userRating, setUserRating] = useState(0);

  // Load user's previous rating from local storage on component mount
  useEffect(() => {
    const storedRating = localStorage.getItem(`product_rating_${id}`);
    if (storedRating) {
      setUserRating(parseInt(storedRating));
    }
  }, [id]);

  // Function to handle user rating click
  const handleRatingClick = (rating) => {
    // Store the user's rating in local storage
    localStorage.setItem(`product_rating_${id}`, rating.toString());
    setUserRating(rating);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-card">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> {">"}
        <Link to="/shop">Shop</Link> {">"}
        {product.name}
      </nav>

      <Container>
        {/* Image */}
        <ImageContainer>
          {product.images.map((image, index) => (
            <div
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
          <h1>{product.name}</h1>
          <h3 className="product-price">${product.price}</h3>
          <div className="product-rating">
            {/* Render the star ratings here */}
            {Array.from({ length: 5 }).map((_, index) => (
              <AiFillStar
                key={index}
                onClick={() => handleRatingClick(index + 1)}
                style={{
                  color: index < userRating ? "#FFD700" : "#9f9f9f",
                  cursor: "pointer",
                }}
              />
            ))}

            <span className="product-description-stars-text">
              | {userRating} Customer Reviews
            </span>
          </div>
          <p className="product-description-text">{product.description}</p>

          {/* Size Buttons */}
          <SizeButtons productId={product.id} />

          {/* Color Buttons */}
          <ColorButtons productId={product.id} />

          {/* Add to Cart Button */}
          <button className="add-to-cart">Add to Cart</button>
          {/* Product Details */}
          <div className="product-card-info">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
            <p>
              Tags: {Array.isArray(product.tags) ? product.tags.join(", ") : ""}
            </p>
          </div>
          {/* Share Icons */}
          <div className="share-icons">
            {/* Include social media sharing icons here */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductCard;
