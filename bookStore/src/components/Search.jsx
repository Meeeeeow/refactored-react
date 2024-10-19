/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Search.css";

const genresList = [
  "Science Fiction",
  "Fantasy",
  "Horror",
  "Romance",
  "Historical Fiction",
  "Thriller",
  "Mystery",
  "Dystopian",
  "Magical Realism",
  "Literary Fiction",
  "Adventure",
  "Gothic Fiction",
  "Crime Fiction",
  "Political Fiction",
  "Satire",
  "Coming-of-Age",
  "War Fiction",
  "Spy Fiction",
  "Urban Fiction",
  "Biography",
  "Autobiography",
  "Memoir",
  "Self-Help",
  "History",
  "True Crime",
  "Philosophy",
  "Religion",
  "Science",
  "Psychology",
  "Sociology",
  "Travel Writing",
  "Food Writing",
  "Health & Fitness",
  "Business & Economics",
  "Politics",
  "Art & Photography",
  "Nature & Environment",
  "Young Adult Fantasy",
  "Young Adult Science Fiction",
  "Young Adult Contemporary",
  "Young Adult Romance",
  "Middle Grade Fiction",
  "Children’s Picture Books",
  "Children’s Adventure",
  "Fairy Tales & Folklore",
  "Paranormal Romance",
  "Space Opera",
  "Epic Fantasy",
  "Sword and Sorcery",
  "Hard Science Fiction",
  "Cyberpunk",
  "Steampunk",
  "Post-Apocalyptic",
  "Legal Thriller",
  "Psychological Thriller",
  "Urban Fantasy",
  "Time Travel",
  "Historical Mystery",
  "Cozy Mystery",
  "Noir",
  "Southern Gothic",
  "Climate Fiction",
];

const Search = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleGenreChange = (e) => {
    const { value } = e.target;
    if (value === "All") {
      setSelectedGenres([]);
    } else {
      setSelectedGenres((prevGenres) =>
        prevGenres.includes(value)
          ? prevGenres.filter((genre) => genre !== value)
          : [...prevGenres, value]
      );
    }
  };

  const handleSearch = () => {
    onSearch({ title, genres: selectedGenres });
  };

  return (
    <div className="search-container">
      {/* Title */}
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={handleTitleChange}
        className="search-input"
      />
      {/* Genre */}
      <select
        onChange={handleGenreChange}
        className="genre-dropdown"
        value={
          selectedGenres.length
            ? selectedGenres[selectedGenres.length - 1]
            : "All"
        }
      >
        <option value="All">All Genres</option>
        {genresList.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
