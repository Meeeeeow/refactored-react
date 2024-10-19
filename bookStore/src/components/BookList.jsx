import { useState, useEffect } from "react";
import Search from "./Search";
import BookCard from "./BookCard";
import Modal from "./Modal";
import "../styles/BookList.css";
import useSearch from "../customHooks/useSearch";
import useWishlist from "../customHooks/useWishList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 32; //number of books per page

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { wishlist, toggleWishlist } = useWishlist(); // Custom hook for wishlist
  const { filteredBooks, handleSearch } = useSearch(books); // Custom hook for search

  const fetchBooks = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://gutendex.com/books?page=${page}`);
      const data = await response.json();
      console.log(data);
      setBooks(data.results);
      setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      setLoading(false);
    }
  };
  console.log(books);
  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading ? (
        <div className="loading">Loading books...</div>
      ) : (
        <div className="book-list">
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.title}
                book={book}
                isWishlisted={wishlist.some(
                  (item) => item.title === book.title
                )}
                toggleWishlist={toggleWishlist}
                onOpenModal={handleOpenModal}
              />
            ))
          ) : (
            <div>No books found</div>
          )}
        </div>
      )}
      {/* Pagination  */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaArrowLeft />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <FaArrowRight />
        </button>
      </div>
      {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
    </div>
  );
};

export default BookList;
