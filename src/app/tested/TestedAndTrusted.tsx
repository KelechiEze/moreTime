import React from "react";
import "./TestedAndTrusted.css"; // Import the CSS file

const TestedAndTrusted = () => {
  return (
    <section className="trusted-container">
      <h2 className="trusted-title">Tested And Trusted</h2>

      {/* First Row - 3 stat boxes */}
      <div className="trusted-stats row">
        <div className="stat-box">
          <span className="highlight">30+</span> Countries
        </div>
        <div className="stat-box">
          <span className="highlight">200+</span> Partners
        </div>
        <div className="stat-box">
          <span className="highlight">1m+</span> Transactions
        </div>
      </div>

      {/* Second Row - 2 stat boxes */}
      <div className="trusted-stats row second-row">
        <div className="stat-box">
          <span className="highlight">300k+</span> Audience
        </div>
        <div className="stat-box">
          <span className="highlight">11k+</span> Products
        </div>
      </div>
    </section>
  );
};

export default TestedAndTrusted;
