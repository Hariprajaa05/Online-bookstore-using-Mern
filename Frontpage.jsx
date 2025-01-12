import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBook,
  FaHeadphones,
  FaRegBookmark,
  FaShoppingBag,
  FaUser,
  FaRegHeart,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";
import book1 from "./assets/images/book1.jpg";
import book2 from "./assets/images/book2.jpg";
import book3 from "./assets/images/book3.jpg";
import genre1 from "./assets/images/genre1.jpg";
import thriller from "./assets/images/thriller.jpg";
import comedy from "./assets/images/comedy.jpg";
import horror from "./assets/images/horror.jpg";
import mystery from "./assets/images/mystery.jpg";
import cartoon from "./assets/images/cartoon.jpg";
import top_sl1 from "./assets/images/top_sl1.jpg";
import top_sl4 from "./assets/images/top_sl4.jpg";
import top_sl3 from "./assets/images/top_sl3.jpg";
import hobbies from "./assets/images/hobbies.jpg";
import flew from "./assets/images/flew.jpg";
import bfg from "./assets/images/bfg.jpg";
import night from "./assets/images/night.jpg";
import key from "./assets/images/key.jpg";
import midnight from "./assets/images/midnight.jpg";

function Frontpage() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [books, setBooks] = useState([]); // State to manage the list of books
  const [book, setBook] = useState(""); // State to manage the new book input

  // Navigate to the corresponding genre page
  const goToGenreDetails = (genreName) => {
    navigate(`/genre/${genreName}`); // Navigate to the genre-specific page
  };
  const handleEbooksClick = () => {
    navigate("/ebooks"); // Navigate to the Ebooks page
  };

  const handleLikeClick = () => {
    navigate("/likes"); // Navigate to the likes page
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  // Handle input change for the book name
  const handleInputChange = (e) => {
    setBook(e.target.value);
  };

  // Handle adding a new book to the list
  const handleAddBook = () => {
    if (book.trim()) {
      setBooks((prevBooks) => [...prevBooks, { name: book, completed: false }]);
      setBook(""); // Clear the input field after adding
    }
  };

  // Toggle the completion status of a book
  const handleToggleComplete = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].completed = !updatedBooks[index].completed;
    setBooks(updatedBooks);
  };
  const booksRow1 = [
    { id: 1, src: top_sl1, title: "Atomic Habit", description: "Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones. Read the full summary to glean 3 key lessons from Atomic Habits, learn how to build a habit in 4 simple steps, and get a handy reference guide for the strategies recommended throughout the book." },
    { id: 2, src: top_sl4, title: "Genre 2", description: "Description for Genre 2" },
    { id: 3, src: top_sl3, title: "Genre 3", description: "Description for Genre 3" },
    { id: 4, src: hobbies, title: "Genre 4", description: "Description for Genre 4" },
    { id: 5, src: hobbies, title: "Genre 4", description: "Description for Genre 4" },
    { id: 6, src: hobbies, title: "Genre 4", description: "Description for Genre 4" },
    { id: 7, src: hobbies, title: "Genre 4", description: "Description for Genre 4" },
    { id: 8, src: hobbies, title: "Genre 4", description: "Description for Genre 4" },
  ];

  const booksRow2 = [
    { id: 9, src: night, title: "Genre 5", description: "Description for Genre 5" },
    { id: 10, src: key, title: "Genre 6", description: "Description for Genre 6" },
    { id: 11, src: midnight, title: "Genre 7", description: "Description for Genre 7" },
    { id: 12, src: flew, title: "Genre 8", description: "Description for Genre 8" },
    { id: 13, src: flew, title: "Genre 8", description: "Description for Genre 8" },
    { id: 14, src: flew, title: "Genre 8", description: "Description for Genre 8" },
    { id: 15, src: flew, title: "Genre 8", description: "Description for Genre 8" },
  ];
  const renderBooksRow = (books) => (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        gap: "20px",
        scrollBehavior: "smooth",
        width: "100%",
      }}
    >
      {books.map((book) => (
        <Link
          to="/book-details"
          state={{ book }}
          key={book.id}
          style={{ textDecoration: "none" }}
        >
          <img
            src={book.src}
            alt={book.title}
            style={{
              width: "200px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Link>
      ))}
    </div>
  );
  return (
    <>
      <div className="trending">
        <div className="First">
          <h1
            className="booktxt"
            style={{ fontSize: "25px", fontFamily: "Roboto" }}
          >
            <b>bookstolove</b>
          </h1>
          <div className="subdiv">
            <p className="Book">
              <FaRegBookmark />
            </p>
            <p className="Heart" onClick={handleLikeClick}>
              <FaRegHeart />
            </p>
            <p className="shopbag" onClick={handleCartClick}>
              <FaShoppingBag />
            </p>
            <p className="User">
              <Link to="/login">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <FaUser />
                )}
              </Link>
            </p>
          </div>
        </div>

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
          <p className="buttonfirdiv" style={{ marginTop: "20px" }}>
            <FaBook style={{ marginRight: "8px" }} />
            Books
          </p>
          <p className="audio" onClick={() => navigate("/audio")}>
            <FaHeadphones style={{ marginRight: "8px" }} />
            AudioBooks
          </p>
          <p className="audio" onClick={handleEbooksClick}>
            <FaMobileAlt style={{ marginRight: "8px" }} />
            Ebooks
          </p>
        </div>

        <div className="secondiv">
          <div className="secondsub">
            <h1>New &</h1>
            <h1>Trending</h1>
            <h5 style={{ color: "grey" }}>Explore new worlds from authors</h5>
          
          </div>

          <img
            id="book1"
            src={book1}
            alt="Last Thing He Told Me"
            onClick={() => navigate("/genre/harrypotter")}
          />
          <div className="thirdsub">
            <p className="author">Author of the Week</p>
            <img
              id="book2"
              src={book2}
              alt="William Shakespeare Collections"
              onClick={() => navigate("/genre/william")}
            />
          </div>
          <div className="thirdsub">
            <p className="author">Trending Audio Playlists</p>
            <img
              id="book3"
              src={book3}
              alt="Play"
              onClick={() => navigate("/audio")}
            />
          </div>
        </div>

        <div className="shelf-container">
          <div className="shelf"></div>
        </div>
      </div>

      <div className="genres">
        <h1
          className="genre"
          style={{ fontSize: "30px", fontFamily: "Roboto" }}
        >
          Genres
        </h1>
        <div className="firstgendiv">
          <div className="genre-item-r">
            <img
              className="Romance"
              src={genre1}
              alt="Romance Books"
              onClick={() => goToGenreDetails("romance_books")}
            />
            <p>
              Romance books explore love and relationships, often with emotional
              and heartwarming stories.
            </p>
          </div>
          <div className="genre-item-m">
            <img
              className="Mystery"
              src={mystery}
              alt="Mystery Books"
              onClick={() => goToGenreDetails("mystery_books")}
            />
            <p>
              Mystery books feature suspense, crime-solving, and thrilling plot
              twists that keep readers guessing.
            </p>
          </div>
          <div className="genre-item-c">
            <img
              className="Comedy"
              src={comedy}
              alt="Comedy Books"
              onClick={() => goToGenreDetails("humor_books")}
            />
            <p>
              Comedy books focus on humor and light-hearted moments that bring
              laughter to the reader.
            </p>
          </div>
        </div>

        <div className="secondgendiv">
          <div className="genre-item-h">
            <img
              className="Horror"
              src={horror}
              alt="Horror Books"
              onClick={() => goToGenreDetails("horror_books")}
              style={{ cursor: "pointer" }}
            />
            <p>
              Horror books create a chilling atmosphere with stories of fear,
              supernatural events, and terror.
            </p>
          </div>
          <div className="genre-item-t">
            <img
              className="Thriller"
              src={thriller}
              alt="Thriller Books"
              onClick={() => goToGenreDetails("mystery_books")}
            />
            <p>
              Thriller books are full of excitement, action, and suspense, often
              with a high-stakes plot.
            </p>
          </div>
          <div className="genre-item-ch">
            <img
              className="Children"
              src={cartoon}
              alt="Children's Books"
              style={{ width: "30%" }}
              onClick={() => goToGenreDetails("children_books")}
            />
            <p>
              Children's books are fun, educational, and filled with engaging
              stories for younger readers.
            </p>
          </div>
        </div>

        <div className="shelf-container">
          <div className="shelf"></div>
        </div>
      </div>
      
      <div
      className="bookextra"
      style={{
        height: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Row 1 of books */}
      {renderBooksRow(booksRow1)}

      {/* "More For You" Text */}
      <div className="geners" style={{ marginTop: "18px", color: "rgb(109, 36, 4)", fontSize: "20px" }}>
        <h1 style={{ textAlign: "center" }}>~More for you~</h1>
      </div>

      {/* Row 2 of books */}
      {renderBooksRow(booksRow2)}
    </div>
    </>
  );
}

export default Frontpage;
