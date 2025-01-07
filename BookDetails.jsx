import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaCartPlus } from 'react-icons/fa';  // Icons for favourites and cart

const BookDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [formError, setFormError] = useState("");

    if (!book) {
        return <p>Book details not found.</p>;
    }

    // Handle opening the payment modal
    const handleBuyNowClick = () => {
        setIsModalOpen(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Handle form submission (payment validation)
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        if (!cardNumber || !cardExpiry || !cardCVV) {
            setFormError("Please fill in all fields.");
            return;
        }

        // Simple validation example
        const cardNumberRegex = /^[0-9]{16}$/;
        const cardExpiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        const cardCVVRegex = /^[0-9]{3}$/;

        if (!cardNumberRegex.test(cardNumber)) {
            setFormError("Invalid card number.");
            return;
        }
        if (!cardExpiryRegex.test(cardExpiry)) {
            setFormError("Invalid expiry date.");
            return;
        }
        if (!cardCVVRegex.test(cardCVV)) {
            setFormError("Invalid CVV.");
            return;
        }

        // On successful validation
        setFormError("");
        alert(`Payment successful for ${book.Title}`);
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", display: "flex", flexDirection: "column" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", color: "#5C4033", marginBottom: "20px" }}>{book.Title}</h1>

            {/* Book Details Section */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                {/* Book Image */}
                <img
                    src={book["Image URL"]}
                    alt={book.Title}
                    style={{
                        width: "200px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />

                {/* Book Info (Price, Rating, Favourites, Cart) */}
                <div style={{ flex: 1 }}>
                    <p><strong>Price:</strong> {book.Price}</p>
                    <p><strong>Rating:</strong> {book.Rating}</p>

                    {/* Favourites and Cart Icons */}
                    <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                        <div
                            onClick={() => alert("Added to favourites")}
                            style={circleIconStyles}
                        >
                            <FaHeart style={{ color: "#fff", fontSize: "20px" }} />
                        </div>
                        <div
                            onClick={() => alert("Added to cart")}
                            style={circleIconStyles}
                        >
                            <FaCartPlus style={{ color: "#fff", fontSize: "20px" }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Book Description */}
            <div style={{ marginTop: "20px" }}>
                <p><strong>Description:</strong> {book.Description || "No description available."}</p>
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#5C4033",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        flex: 1,
                    }}
                    onClick={handleBuyNowClick}
                >
                    Buy Now
                </button>
                <button
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#ccc",
                        color: "#333",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        flex: 1,
                    }}
                    onClick={() => navigate("/")}
                >
                    Back to Books
                </button>
            </div>

            {/* Payment Modal */}
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
                                <button type="submit" style={submitButtonStyles}>Submit Payment</button>
                                <button type="button" onClick={handleCloseModal} style={cancelButtonStyles}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

// Modal Styles
const modalStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
};

const modalContentStyles = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "450px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputGroupStyles = {
    marginBottom: "15px",
    textAlign: "left",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const buttonGroupStyles = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
};

const submitButtonStyles = {
    padding: "12px 20px",
    backgroundColor: "#5C4033",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

const cancelButtonStyles = {
    padding: "12px 20px",
    backgroundColor: "#ccc",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

const circleIconStyles = {
    backgroundColor: "#5C4033",
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default BookDetails;
