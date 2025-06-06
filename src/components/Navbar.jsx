// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">KLIMB</div>
      <ul className="nav-links">
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("howitworks")}>How It Works</li>
        <li onClick={() => handleScroll("tracker")}>Tracker</li>
        <li onClick={() => handleScroll("testimonials")}>Testimonials</li>
        <li>
          <button onClick={() => handleScroll("quiz")} className="get-started-btn">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
