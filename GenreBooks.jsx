import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // React Router hooks for navigation and dynamic params
import axios from "axios"; // For making API requests
import { FaBook, FaHeadphones, FaMobileAlt } from "react-icons/fa"; // Icons for navigation bar

const GenreBooks = () => {
    const { genre } = useParams(); // Capture genre dynamically from the URL
    const [books, setBooks] = useState([]); // State to store books
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(""); // State to manage errors
    const navigate = useNavigate(); // React Router hook for navigation

    // Fetch books from API based on genre
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/books/${genre}`); // API call
                if (Array.isArray(response.data)) {
                    setBooks(response.data); // Set books if data is valid
                } else {
                    setError("No books available for this genre."); // Handle no books case
                }
            } catch (error) {
                setError(`Error fetching ${genre} books: ${error.message}`); // Capture error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchBooks(); // Call fetch function
    }, [genre]); // Update when genre changes

    return (
        <div style={{ padding: "20px" }}>
            {/* Page title */}
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#5C4033" }}>
                Books For You
            </h1>

            {/* Navigation bar */}
            <div
                className="second"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "20px",
                    marginBottom: "20px",
                }}
            >
                {/* Navigation item: Books */}
                <p
                    className="buttonfirdiv"
                    style={{ marginTop: "20px", cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    <FaBook style={{ marginRight: "8px" }} /> Books
                </p>

                {/* Navigation item: Audiobooks */}
                <p
                    className="audio"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/audio")}
                >
                    <FaHeadphones style={{ marginRight: "8px" }} /> Audiobooks
                </p>

                {/* Navigation item: Ebooks */}
                <p
                    className="audio"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/ebooks")}
                >
                    <FaMobileAlt style={{ marginRight: "8px" }} /> Ebooks
                </p>
            </div>

            {/* Display loading message, error, or books */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : books.length > 0 ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {/* Map over books to display each one */}
                    {books.map((book, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "15px",
                                textAlign: "center",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#fff",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
                                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)"; // Scale back on mouse leave
                                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <img
                                src={book["Image URL"]}
                                alt={book.Title}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{book.Title}</h3>
                            <p style={{ fontSize: "16px", color: "#555" }}>{book.Price}</p>
                            <p style={{ fontSize: "14px", color: "#777" }}>Rating: {book.Rating}</p>
                            <button
                                style={{
                                    padding: "10px 15px",
                                    backgroundColor: "#5C4033",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginTop: "10px",
                                    width: "100%",
                                }}
                                onClick={() => navigate(`/book/${index}`, { state: book })} // Navigate to book details
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No {genre} books available.</p>
            )}
        </div>
    );
};

export default GenreBooks;
