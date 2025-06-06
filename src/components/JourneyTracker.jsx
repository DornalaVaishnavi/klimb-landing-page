// src/components/JourneyTracker.jsx
import React from "react";
import "./JourneyTracker.css";

const steps = [
  {
    step: 1,
    title: "Discover KLIMB",
    desc: "Learn how KLIMB helps kids find their sport match.",
    icon: "🔍"
  },
  {
    step: 2,
    title: "Take the Quiz",
    desc: "Answer fun questions about your interests & abilities.",
    icon: "📝"
  },
  {
    step: 3,
    title: "Reveal Your Sport Matches",
    desc: "Get personalized recommendations for the best-fit sports.",
    icon: "🎯"
  },
  {
    step: 4,
    title: "Visit an Academy",
    desc: "Try out your matched sports at local academies.",
    icon: "🏫"
  },
  {
    step: 5,
    title: "Track Your Progress",
    desc: "Stay updated with performance & growth tracking.",
    icon: "📈"
  }
];

const JourneyTracker = () => {
  return (
    <section className="journey-section" id="tracker">
      <h2>Your Journey with KLIMB</h2>
      <div className="journey-cards">
        {steps.map((step) => (
          <div key={step.step} className="card">
            <div className="icon">{step.icon}</div>
            <h3>{`Step ${step.step}: ${step.title}`}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTracker;
