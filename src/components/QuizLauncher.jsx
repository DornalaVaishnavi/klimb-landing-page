// src/components/QuizLauncher.jsx
import React from "react";
import "./QuizLauncher.css";

const QuizLauncher = () => {
  return (
    <section id="quiz" className="quiz-launcher">
      <h2>Ready to Begin Your Adventure?</h2>
      <p>Take our quick quiz to find the sport that fits you best.</p>
      <button onClick={() => alert("Quiz would start here!")}>Start Your Adventure</button>
      <div className="mascot-placeholder">🤸‍♂️</div> {/* Replace with mascot image if available */}
      <div className="progress-bar-placeholder">Progress Bar Here</div>
    </section>
  );
};

export default QuizLauncher;
