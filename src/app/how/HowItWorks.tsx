import React from "react";
import "./HowItWorks.css"; // Import the CSS file

const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <div className="how-it-works-content">
        {/* Left side - Steps */}
        <div className="how-it-works-text">
          <h2 className="how-it-works-title1">How It Works</h2>
          <ul className="how-it-works-list">
            <li>
              <img src="/tickie.png" alt="Checkmark" className="checkmark-icon" />
              Sign up and fund your wallet instantly
            </li>
            <li>
              <img src="/tickie.png" alt="Checkmark" className="checkmark-icon" />
              Purchase airtime, data, or pay bills with ease
            </li>
            <li>
              <img src="/tickie.png" alt="Checkmark" className="checkmark-icon" />
              Earn commissions on every transaction
            </li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>

        {/* Right side - Image */}
        <div className="how-it-works-image">
          <img src="/loanfree.png" alt="Making Payments Easily" className="how-it-works-img" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
