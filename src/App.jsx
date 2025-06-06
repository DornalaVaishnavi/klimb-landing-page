import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneyTracker from "./components/JourneyTracker";
import QuizLauncher from "./components/QuizLauncher";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Navbar is sticky and always on top */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* How It Works can be merged into JourneyTracker or expanded separately if needed */}
      <section id="tracker">
        <JourneyTracker />
      </section>

      {/* Quiz Launcher Section */}
      <section id="quiz">
        <QuizLauncher />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
