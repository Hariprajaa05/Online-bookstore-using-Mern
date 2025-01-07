import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/books_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// API Route to Fetch Books by Genre
app.get("/api/books/:genre", async (req, res) => {
    const genre = req.params.genre; // Get genre from URL params
    console.log(`Request received for genre: ${genre}`); // Debugging

    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        console.log("Available collections:", collectionNames); // Debugging log

        // Check if the requested genre exists in the database
        if (!collectionNames.includes(genre)) {
            return res.status(404).json({ error: `Collection '${genre}' not found` });
        }

        // Fetch books from the correct collection
        const collection = mongoose.connection.collection(genre);
        const books = await collection.find().toArray();

        res.json(books); // Return the books for that genre
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: `Error fetching ${genre} books` });
    }
});

// API Route to Fetch Audiobooks
app.get("/api/audio", async (req, res) => {
    try {
        const collection = mongoose.connection.collection("horraudio");
        const audioBooks = await collection.find().toArray();

        const formattedAudioBooks = audioBooks.map(audio => ({
            ...audio,
            rating: parseFloat(audio.rating), // Convert string to float
            duration: audio.duration,        // Leave duration as string (e.g., "8 hrs")
        }));

        res.json(formattedAudioBooks);
    } catch (error) {
        console.error("Error fetching audiobooks:", error);
        res.status(500).json({ error: "Failed to fetch audiobooks" });
    }
});

// API Route to Fetch Ebooks
app.get("/api/ebook", async (req, res) => {
    try {
        const collection = mongoose.connection.collection("ebooks");
        const eBooks = await collection.find().toArray();

        // Format eBook data
        const formattedEBooks = eBooks.map(ebook => ({
            id: ebook._id, // Include the eBook id as a string
            title: ebook.title,
            author: ebook.author,
            description: ebook.description,
            image: ebook.image,
            genre: ebook.genre,
            language: ebook.language,
            publication_date: ebook.publication_date,
            rating: parseFloat(ebook.rating), // Ensure rating is a float
            button_url: ebook.button_url,
        }));

        res.json(formattedEBooks);
    } catch (error) {
        console.error("Error fetching ebooks:", error);
        res.status(500).json({ error: "Failed to fetch ebooks" });
    }
});
// API Route to Search Books


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
