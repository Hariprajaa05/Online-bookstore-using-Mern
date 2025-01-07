import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; // Importing Font Awesome icons
import { FaBook, FaHeadphones, FaMobileAlt } from "react-icons/fa"; 
import { useNavigate, Link } from "react-router-dom";

const AudiobooksPage = () => {
    const navigate = useNavigate(); 
    const [isPlaying, setIsPlaying] = useState(null); // Track the currently playing index
    const [modalVisible, setModalVisible] = useState(false); // To show or hide the modal
    const [currentAudio, setCurrentAudio] = useState(null); // The audio object to be played

    // URL of an audio file (this is a publicly available one for demonstration)
    const audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';

    const [audioBooks, setAudioBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5500/api/audio")
            .then(response => response.json())
            .then(data => {
                setAudioBooks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching audiobooks:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading audiobooks...</p>;
    }

    if (audioBooks.length === 0) {
        return <p>No audiobooks available.</p>;
    }

    const handlePlayPause = (audio) => {
        if (currentAudio === audio) {
            setIsPlaying(!isPlaying);
        } else {
            setIsPlaying(true);
            setCurrentAudio(audio);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setIsPlaying(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#5C4033" }}>Audiobooks</h1>
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
    className="audio"
    style={{ marginTop: "20px", cursor: "pointer" }}
    onClick={() => navigate("/")}
>
    <FaBook style={{ marginRight: "8px" }} /> Books
</p>

{/* Navigation item: Audiobooks */}
<p
    className="buttonfirdiv"
    onClick={() => navigate("/audio")}
>
    <FaHeadphones style={{ marginRight: "8px" }} />
    Audiobooks
</p>

{/* Navigation item: Ebooks */}
<p
    className="audio"
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/ebooks")}
>
    <FaMobileAlt style={{ marginRight: "8px" }} /> Ebooks
</p>

{/* Dropdown for genres */}
<div style={{ display: "inline-block", marginLeft: "20px", position: "relative" }}>
</div>


            </div>
            <div style={styles.gridContainer}>
                {audioBooks.map((audio, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            src={audio.image}
                            alt={audio.name}
                            style={styles.image}
                        />
                        <h2 style={styles.title}>{audio.name}</h2>
                        <p><strong>Narrated by:</strong> {audio.narrated}</p>
                        <p><strong>Duration:</strong> {audio.duration}</p>
                        <p><strong>Rating:</strong> {audio.rating} / 5</p>
                        <p><strong>genre:</strong>{audio.genre}</p>
                        <p>{audio.language}</p>

                        <div style={styles.buttonContainer}>
                            <button
                                style={styles.playButton}
                                onClick={() => {
                                    setModalVisible(true);
                                    handlePlayPause(audio);
                                }}
                            >
                                {isPlaying && currentAudio === audio ? 'Pause' : 'Play'}
                            </button>

                            {/* Add to Favourites and Add to Cart Icons */}
                            <div style={styles.iconContainer}>
                                <button
                                    style={styles.iconButton}
                                    onClick={() => console.log(`Added ${audio.name} to Favourites`)}
                                >
                                    <FaHeart style={styles.icon} />
                                </button>
                                <button
                                    style={styles.iconButton}
                                    onClick={() => console.log(`Added ${audio.name} to Cart`)}
                                >
                                    <FaShoppingCart style={styles.icon} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for playing the audio */}
            {modalVisible && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <h2>{currentAudio.name}</h2>
                        <img src={currentAudio.image} alt={currentAudio.name} style={styles.modalImage} />
                        <audio
                            src={audioUrl}
                            controls
                            autoPlay={isPlaying}
                        />
                        <button onClick={handleCloseModal} style={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudiobooksPage;

const styles = {
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Adding transition for smooth hover effect
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "10px 0",
    },
    playButton: {
        padding: "10px 15px",
        backgroundColor: "#5C4033",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        width: "100%",
    },
    buttonContainer: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
    iconContainer: {
        display: "flex",
        gap: "15px", // Adjust the gap between icons
        alignItems: "center",
    },
    iconButton: {
        width: "25px",
        height: "25px",
        backgroundColor: "#5C4033",
        color: "white",
        border: "none",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    icon: {
        fontSize: "15px", // Adjust icon size
    },
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "80%",
        maxWidth: "500px",
    },
    modalImage: {
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    closeButton: {
        backgroundColor: "#5C4033",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "15px",
    },
};
