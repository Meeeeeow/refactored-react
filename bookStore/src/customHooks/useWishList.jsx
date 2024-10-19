import { useState, useEffect } from "react";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const toggleWishlist = (book) => {
    const isWishlisted = wishlist.some((item) => item.id === book.id);

    const updatedWishlist = isWishlisted
      ? wishlist.filter((item) => item.id !== book.id)
      : [...wishlist, book];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return { wishlist, toggleWishlist };
};

export default useWishlist;
