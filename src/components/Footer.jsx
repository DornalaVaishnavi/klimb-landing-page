// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";  // <-- Add this line
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">KLIMB</div>
        <p>Discovering young talents, one sport at a time.</p>
      </div>
      <div className="footer-links">
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-social">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <div className="footer-stats">
        <p>10,000+ kids matched!</p>
      </div>
    </footer>
  );
};

export default Footer;
