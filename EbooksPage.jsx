import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBook, FaHeadphones, FaMobileAlt } from "react-icons/fa";

const EbooksPage = () => {
    const navigate = useNavigate();
    const [ebooks, setEbooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5500/api/ebook")
            .then((response) => response.json())
            .then((data) => {
                setEbooks(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching ebooks:", error);
                setLoading(false);
            });
    }, []);

    const openModal = (description) => {
        setModalContent(description);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleEbooksClick = () => {
        navigate("/ebooks");
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={{ color: "#5C4033", textAlign: "center" }}>Ebooks</h1>

            {/* Second div with navigation */}
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
                <p className="buttonfirdiv" style={{ marginTop: "20px", cursor: "pointer" }}>
                    <FaBook style={{ marginRight: "8px" }} />
                    Books
                </p>
                <p className="audio" style={{ cursor: "pointer" }} onClick={() => navigate("/audio")}>
                    <FaHeadphones style={{ marginRight: "8px" }} />
                    AudioBooks
                </p>
                <p className="audio" style={{ cursor: "pointer" }} onClick={handleEbooksClick}>
                    <FaMobileAlt style={{ marginRight: "8px" }} />
                    Ebooks
                </p>
            </div>

            {/* Ebooks grid */}
            <div style={styles.grid}>
                {ebooks.map((ebook) => (
                    <div key={ebook._id} style={styles.card}>
                        <img
                            src={ebook.image}
                            alt={ebook.title}
                            style={styles.image}
                        />
                        <h2 style={styles.title}>{ebook.title}</h2>
                        <p style={styles.author}>
                            <strong>Author:</strong> {ebook.author}
                        </p>
                        <p style={styles.language}>
                            <strong>Language:</strong> {ebook.language}
                        </p>
                        <p style={styles.rating}>
                            <strong>Rating:</strong> {ebook.rating}
                        </p>
                        <p style={styles.publication}>
                            <strong>Publication Date:</strong> {ebook.publication_date}
                        </p>
                        <button
                            style={styles.button}
                            onClick={() => openModal(ebook.description)}
                        >
                            Description
                        </button>
                        {"  "}
                        <button
                            style={styles.button}
                            onClick={() => window.open(ebook.button_url, "_blank")}
                        >
                            Read
                        </button>
                        <button style={styles.favoriteButton}>
                            <FaHeart style={{ color: "#5C4033", fontSize: "20px" }} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div style={styles.modal} onClick={handleModalClick}>
                    <div style={styles.modalContent}>
                        <span style={styles.closeButton} onClick={closeModal}>&times;</span>
                        <h2>Description</h2>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
// Inline styles for the grid layout and card styling
const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "2rem",
        color: "#333",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition on hover
    },
    cardHover: {
        transform: "scale(1.05)", // Slightly enlarge the card
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)", // Add a more prominent shadow
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "5px",
        marginBottom: "10px",
    },
    title: {
        fontSize: "1.2rem",
        color: "#333",
        marginBottom: "10px",
    },
    author: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "5px",
    },
    language: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "5px",
    },
    rating: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "5px",
    },
    publication: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "10px",
    },
    button: {
        backgroundColor: "#5C4033",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "10px",
    },
    favoriteButton: {
        backgroundColor: "transparent",
        color: "#ff6347", // Red color for heart
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '50%',
        maxHeight: '80%',
        overflowY: 'auto',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '30px',
        cursor: 'pointer',
    },
};

export default EbooksPage;
