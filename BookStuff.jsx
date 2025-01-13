import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaCartPlus, FaStar } from "react-icons/fa";

function BookStuff() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  const [rating, setRating] = useState(5); // Default 5 stars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [formError, setFormError] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const handleLike = () => {
    console.log("Liked the book");
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCardNumber("");
    setCardExpiry("");
    setCardCVV("");
    setFormError("");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardExpiry || !cardCVV) {
      setFormError("All fields are required.");
      return;
    }
    setFormError("");
    console.log("Payment submitted");
    handleCloseModal();
  };

  const modalStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyles = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  };

  const inputGroupStyles = {
    marginBottom: "15px",
  };

  const buttonGroupStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  const submitButtonStyles = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const cancelButtonStyles = {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      {book ? (
        <div
          style={{
            display: "flex",
            gap: "30px", // Increased gap for better spacing
            alignItems: "flex-start",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            width: "80%", // To make sure everything is centered and has appropriate width
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={book.src}
              alt={book.title}
              style={{
                width: "250px",
                height: "375px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          <div style={{ maxWidth: "600px", lineHeight: "1.6", paddingLeft: "20px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              {book.title}
            </h1>
            <p style={{ fontSize: "18px", color: "#555" }}>
              {book.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    color: star <= rating ? "#FFD700" : "#ccc",
                  }}
                  onClick={() => handleRating(star)}
                />
              ))}
              <FaHeart
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#ff4d4d",
                }}
                onClick={handleLike}
              />
              <FaCartPlus
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#28a745",
                }}
                onClick={handleAddToCart}
              />
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleBuyNow}
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
        <p style={{ fontSize: "18px", color: "#555" }}>No book details found.</p>
      )}

      {isModalOpen && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <h2>Payment Information</h2>
            <form onSubmit={handlePaymentSubmit}>
              <div style={inputGroupStyles}>
                <label>Card Number:</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength="16"
                  placeholder="Enter card number"
                />
              </div>
              <div style={inputGroupStyles}>
                <label>Expiry Date (MM/YY):</label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              <div style={inputGroupStyles}>
                <label>CVV:</label>
                <input
                  type="text"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                  maxLength="3"
                  placeholder="CVV"
                />
              </div>
              {formError && <p style={{ color: "red" }}>{formError}</p>}
              <div style={buttonGroupStyles}>
                <button type="submit" style={submitButtonStyles}>
                  Submit Payment
                </button>
                <button type="button" onClick={handleCloseModal} style={cancelButtonStyles}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookStuff;
