import { useState } from "react";
import "../styles/BookCard.css";

const BookCard = ({ book, isWishlisted, toggleWishlist, onOpenModal }) => {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = book.formats["image/jpeg"];
  const authorName = book.authors?.[0]?.name || "Unknown Author";

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const getShortenedTitle = (title) => {
    if (title.includes(";")) {
      return title.split(";")[0].trim();
    }

    const words = title.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + "...";
    }
    return title;
  };

  const shortenedTitle = getShortenedTitle(book.title);

  return (
    <div className={`book-card ${loaded ? "fade-in" : ""}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={book.title}
          onLoad={handleImageLoad}
          onClick={() => onOpenModal(book)}
        />
      )}
      <div className="book-title">{shortenedTitle}</div>
      <div className="book-author">{authorName}</div>
      <div
        className="wishlist-icon"
        onClick={() => toggleWishlist(book)}
        style={{ cursor: "pointer" }}
      >
        {isWishlisted ? (
          <span role="img" aria-label="Remove from Wishlist">
            ❤️
          </span>
        ) : (
          <span role="img" aria-label="Add to Wishlist">
            🤍
          </span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
