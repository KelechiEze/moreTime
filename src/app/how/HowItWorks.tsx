import React from "react";
import Image from "next/image"; // Next.js optimized Image component
import './HowItWorks.css'; // Import the CSS file

const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <div className="how-it-works-content">
        {/* Left side - Steps */}
        <div className="how-it-works-text">
          <h2 className="how-it-works-title1">How It Works</h2>
          <ul className="how-it-works-list">
            <li>
              <Image src="/tickie.png" alt="Checkmark" width={30} height={30} />
              Sign up and Verify your Identity
            </li>
            <li>
              <Image src="/tickie.png" alt="Checkmark" width={30} height={30} />
              Apply for a loan or lending opportunity
            </li>
            <li>
              <Image src="/tickie.png" alt="Checkmark" width={30} height={30} />
              Get funds faster than the speed of light
            </li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>

        {/* Right side - Image */}
        <div className="how-it-works-image">
          <Image
            src="/loanfree.png"
            alt="Happy Woman with Money"
            width={350} 
            height={350} 
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
