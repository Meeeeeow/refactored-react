import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Nav from "./sections/Nav";
import WishList from "./components/WishList";
import Footer from "./sections/Footer";
import About from "./sections/About";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
