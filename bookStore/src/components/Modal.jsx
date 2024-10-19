import React from "react";
import "../styles/Modal.css";

const Modal = ({ book, onClose }) => {
  const imageUrl = book.formats["image/jpeg"];
  const authorName = book.authors?.[0]?.name || "Unknown Author";
  const genres = Array.from(
    new Set(
      book.subjects
        .map((subject) => {
          if (subject.includes(" -- ")) {
            return subject.split(" -- ")[1].trim();
          }
          return subject.trim();
        })
        .filter((subject) => subject)
    )
  ).join(", ");
  console.log(genres);
  const bookId = book.id;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={imageUrl} alt={book.title} className="modal-image" />
          </div>
          <div className="modal-details">
            <p>
              <strong>ID:</strong> {bookId}
            </p>
            <h3 className="modal-title">{book.title}</h3>
            <p>
              <strong>Author:</strong> {authorName}
            </p>
            <p>
              <strong>Genre:</strong> {genres}
            </p>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
