import React from "react";
import "./LandingPage.css"; // Import the CSS file
import WhyChoose from "../app/choose/WhyChoose";
import HowItWorks from "../app/how/HowItWorks";
import WinSection from "../app/win/WinSection";
import TestedAndTrusted from "../app/tested/TestedAndTrusted";
import Footer from "../app/footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="blue">M</span>
          <span className="clock">O</span> {/* Placeholder for clock */}
          <span className="blue">RE TIME</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Borrow</li>
          <li>Contact</li>
        </ul>
        <button className="get-started">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>More Time <br /> More Financial Freedom</h1>
          <p>
            Easily access fast and flexible borrowing or lending solutions 
            designed to help you manage your finances.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Why Choose More Time Section */}
      <WhyChoose />
      <HowItWorks />
      <WinSection />
      <TestedAndTrusted />
      <Footer />
    </div>
  );
};

export default LandingPage;
