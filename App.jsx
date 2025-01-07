import Frontpage from "./Frontpage.jsx";
import Login from './Login.jsx';
import Signup from './signup.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import SavedBooksPage from './SavedBooksPage.jsx';
import Audiobooks from "./Audiobooks";
import GenreBooks from './GenreBooks.jsx';
import BookDetails from './BookDetails.jsx'; 
import EbooksPage from "./EbooksPage";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/audio" element={<Audiobooks />} />
          <Route path="/genre/:genre" element={<GenreBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved-books" element={<SavedBooksPage />}
          
           /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
