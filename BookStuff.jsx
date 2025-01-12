import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa";

function BookStuff() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  // Navigate back to the previous page
  const goBack = () => {
    navigate(-1);
  };

  // Handle adding to cart or like
  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const handleLike = () => {
    console.log("Liked the book");
  };

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      {book ? (
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {/* Book Image */}
          <img
            src={book.src}
            alt={book.title}
            style={{
              width: "300px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* Book Details */}
          <div style={{ maxWidth: "500px" }}>
            <h1>{book.title}</h1>
            <p>{book.description}</p>

            {/* Like and Cart Icons */}
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <FaHeart
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "red",
                }}
                onClick={handleLike}
              />
              <FaCartPlus
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "green",
                }}
                onClick={handleAddToCart}
              />
            </div>

            {/* Buy and Back Buttons */}
            <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
              <button
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={goBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No book details found.</p>
      )}
    </div>
  );
}

export default BookStuff;
