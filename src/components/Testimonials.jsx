import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Parent of 8-year-old",
    quote: "KLIMB helped my child find a sport they truly love!",
    avatar: "👩‍👧"
  },
  {
    name: "Parent of 10-year-old",
    quote: "The quiz was fun and surprisingly accurate. Highly recommend!",
    avatar: "👨‍👧‍👦"
  },
  {
    name: "Coach from Partner Academy",
    quote: "We’ve discovered great young talent through KLIMB.",
    avatar: "🏋️"
  },
  {
    name: "Parent of 6-year-old",
    quote: "The journey was playful and professional. Perfect mix!",
    avatar: "👩‍👦"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What Parents and Coaches Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="avatar">{t.avatar}</div>
            <p className="quote">“{t.quote}”</p>
            <p className="name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
