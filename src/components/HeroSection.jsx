// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1>Find Your Sports Match</h1>
        <p>Discover the perfect sport through fun quizzes and expert guidance.</p>
        <button className="hero-button">Start Your Quiz</button>
      </div>
      <div className="mascot-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png" // example mascot image URL
          alt="KLIMB Mascot"
          className="mascot-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
