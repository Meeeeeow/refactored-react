import { useState, useEffect } from "react";

const useSearch = (initialBooks) => {
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  useEffect(() => {
    setFilteredBooks(initialBooks);
  }, [initialBooks]);

  const handleSearch = ({ title, genres }) => {
    let results = initialBooks;

    if (title) {
      results = results.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (genres && genres.length > 0) {
      results = results.filter((book) =>
        genres.some((genre) =>
          book.subjects.some((bookGenre) =>
            bookGenre.toLowerCase().includes(genre.toLowerCase())
          )
        )
      );
    }

    setFilteredBooks(results);
  };

  return { filteredBooks, handleSearch };
};

export default useSearch;
