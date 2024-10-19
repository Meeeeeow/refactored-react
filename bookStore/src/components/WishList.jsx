import { useState } from "react";
import BookCard from "./BookCard";
import Modal from "./Modal";
import useSearch from "../customHooks/useSearch";
import useWishlist from "../customHooks/useWishList";
import Search from "./Search";
import "../styles/BookList.css";

const WishList = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { filteredBooks, handleSearch } = useSearch(wishlist);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      <Search onSearch={handleSearch} />
      {filteredBooks && filteredBooks.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.title}
              book={book}
              isWishlisted={true}
              toggleWishlist={toggleWishlist}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      )}
      {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
    </div>
  );
};

export default WishList;
