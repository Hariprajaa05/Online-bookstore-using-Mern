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
import newbook1 from "./assets/images/newbook1.jpg";
import newbook7 from "./assets/images/newbook7.jpg";
import newbook4 from "./assets/images/newbook4.jpg";
import newbook8 from "./assets/images/newbook8.jpg";
import newbook9 from "./assets/images/newbook9.jpg";
import newbook5 from "./assets/images/newbook5.jpg";
import newbook3 from "./assets/images/newbook3.jpg";

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
    {
      id: 1,
      src: top_sl1,
      title: "It Ends With Us",
      description:
        "It Ends with Us” follows our protagonist Lily who meets Ryle one night on a rooftop. After a few encounters, they begin to get to know one another and fall in love. They had a picture-perfect relationship, but things take a turn when Ryle becomes abusive.It sheds light on the complexities of abusive relationships and the courage it takes to break free from them. Through Lily's journey, we are reminded of the importance of self-love, forgiveness, and the ability to create our own happy endings, even in the face of adversity.",
    },
    {
      id: 2,
      src: top_sl4,
      title: "Do It Today",
      description:
        "Do It Today by Darius Foroux focuses on overcoming procrastination and taking action immediately. It provides insights on how to build discipline, eliminate distractions, and achieve your goals. The book is filled with practical advice on time management and productivity. It emphasizes the importance of mindset in achieving personal success. Perfect for those struggling with delays and unproductive habits.",
    },
    {
      id: 3,
      src: top_sl3,
      title: "You Only Live Once",
      description:
        "This book inspires readers to embrace life and live it to the fullest. It encourages stepping out of comfort zones, taking risks, and cherishing each moment. Packed with motivational stories, it shows how to make every day count. The book highlights the importance of following passions and creating unforgettable experiences. It's a guide to leading a fulfilling and adventurous life.",
    },
    {
      id: 4,
      src: bfg,
      title: "BFG",
      description:
        "The BFG by Roald Dahl is a whimsical tale of friendship between a young girl and a Big Friendly Giant. The story explores their adventures in a magical world filled with giants and dreams. It showcases themes of bravery, kindness, and imagination. A timeless classic loved by children and adults alike. Perfect for those who enjoy enchanting and heartwarming stories.",
    },
    {
      id: 5,
      src: night,
      title: "NightBooks",
      description:
        "NightBooks by J.A. White is a thrilling story about a boy trapped by a wicked witch. To survive, he must tell scary stories each night. The book blends suspense, adventure, and fantasy in a gripping narrative. It explores themes of courage, creativity, and self-discovery. A perfect read for fans of spooky and imaginative tales.",
    },
    {
      id: 6,
      src: key,
      title: "The Secret Key",
      description:
        "The Secret Key is an intriguing mystery that follows a young protagonist uncovering hidden truths. The story is packed with suspense, puzzles, and unexpected twists. It highlights the power of curiosity and determination. Readers are taken on a thrilling journey filled with danger and discovery. Ideal for fans of adventure and mystery genres.",
    },
    {
      id: 7,
      src: flew,
      title: "The Boy Who Flew",
      description:
        "The Boy Who Flew is an inspiring tale of a young boy who dreams of defying gravity. Set in a fantastical world, the book explores themes of ambition, perseverance, and friendship. It captures the magic of following one's dreams against all odds. A heartwarming and uplifting story for readers of all ages. Perfect for those who love imaginative and empowering tales.",
    },
    {
      id: 8,
      src: hobbies,
      title: "Hobbies That Make You Smarter According To Science",
      description:
        "This book explores hobbies that boost intelligence and creativity. Backed by scientific studies, it highlights activities that improve brain function, memory, and problem-solving skills. It provides practical tips for incorporating these hobbies into daily life. Perfect for those looking to enhance their mental abilities and personal growth. A fascinating read for curious minds.",
    },
  ];

  const booksRow2 = [
    {
      id: 9,
      src: newbook7,
      title: "It Starts With Us",
      description:
        "This sequel to 'It Ends With Us' delves deeper into relationships, self-love, and healing. It focuses on family dynamics, resilience, and second chances. Written with emotional depth, it explores themes of forgiveness and personal growth. Perfect for fans of heartfelt and inspiring stories. A touching tale about overcoming the past and embracing the future.",
    },
    {
      id: 10,
      src: newbook1,
      title: "The 10 Riddles Of The Earth",
      description:
        "A captivating exploration of Earth's greatest mysteries. The book covers unsolved phenomena, scientific wonders, and natural marvels. It's a journey through history, science, and imagination. Readers will be fascinated by the world's hidden secrets. Perfect for those curious about the unknown and eager to learn.",
    },
    {
      id: 11,
      src: midnight,
      title: "The Midnight Library",
      description:
        "The Midnight Library by Matt Haig is a thought-provoking tale about life's choices and regrets. It follows a woman who discovers a library with books containing alternate lives she could have lived. The story emphasizes self-acceptance, second chances, and the beauty of imperfection. A deeply moving and philosophical read for introspective minds.",
    },
    {
      id: 12,
      src: newbook4,
      title: "Secret Study Guide",
      description:
        "A comprehensive guide designed to make learning effective and enjoyable. It offers tips on study techniques, time management, and retaining information. Packed with insights, it's perfect for students and lifelong learners. The book simplifies complex concepts into actionable steps. An essential tool for academic success.",
    },
    {
      id: 13,
      src: newbook8,
      title: "Quantitative Aptitude",
      description:
        "An essential resource for mastering quantitative aptitude. It covers topics ranging from basic arithmetic to advanced problem-solving. Perfect for competitive exams, the book includes practice questions and solutions. Written in a clear and concise manner, it's ideal for beginners and experts alike. A must-have for aspiring professionals.",
    },
    {
      id: 14,
      src: newbook9,
      title: "Beauty And The Beast",
      description:
        "This timeless fairy tale explores themes of love, inner beauty, and redemption. The story of Belle and the Beast captures hearts with its magic and moral lessons. A blend of romance and fantasy, it's cherished by readers of all ages. A classic tale that continues to inspire and enchant. Perfect for fans of fairy tales and happy endings.",
    },
    {
      id: 15,
      src: newbook5,
      title: "ASAP Govt & Politics",
      description:
        "A concise guide to understanding government and politics. It simplifies complex concepts, making them accessible to readers. Covers key topics, historical events, and political theories. Perfect for students and enthusiasts alike. An informative resource for developing a strong foundation in political science.",
    },
    {
      id: 16,
      src: newbook3,
      title: "Again But Better",
      description:
        "A heartwarming story about second chances and personal transformation. It follows a young protagonist who rediscovers herself through adventure and love. The book explores themes of self-discovery, courage, and following one's dreams. Written with humor and charm, it's a relatable and uplifting read. Perfect for those seeking inspiration and a fresh start.",
    },
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
        <div
          className="geners"
          style={{
            marginTop: "18px",
            color: "rgb(109, 36, 4)",
            fontSize: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>~Trending~</h1>
        </div>

        {/* Row 2 of books */}
        {renderBooksRow(booksRow2)}
      </div>
    </>
  );
}

export default Frontpage;
