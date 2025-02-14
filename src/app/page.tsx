import React from "react";
import "./LandingPage.css"; // Import CSS file
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
          <img src="/logomoretime.png" alt="More Time Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Product & Services</li>
          <li>Partners & Agents</li>
          <li>Contact</li> 
        </ul>
        <button className="get-started">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
      
        <div className="hero-content">
          <h1>Top Up, Pay Bills, Earn Smart</h1>
          <p>
            Need airtime? Covered. Paying bills? Handled. Want to earn? Easy!  
            Join thousands of agents making money while keeping the world connected.  
            Power up your wallet—because smart people don’t just spend, they earn too!  
          </p>
          <div className="button-group">
            <button className="hero-button">Get Started</button>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <WhyChoose />
      <HowItWorks />
      <WinSection />
      <TestedAndTrusted />
      <Footer />
    </div>
  );
};

export default LandingPage;
