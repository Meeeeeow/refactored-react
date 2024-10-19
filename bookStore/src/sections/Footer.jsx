import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Book Station. All rights reserved.
      </p>
      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
