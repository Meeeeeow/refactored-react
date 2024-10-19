import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger, close } from "../assets/icons";
import "../styles/Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Book Station</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? close : hamburger}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="menu-icon"
        />
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
