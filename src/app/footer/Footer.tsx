import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="logo">
          <span className="blue">M</span>
          <span className="clock">O</span> {/* Placeholder for clock */}
          <span className="blue">RE TIME</span>
        </div>

      {/* Links Section */}
      <div className="footer-links">
        <h3>LINKS</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/borrow">Borrow</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="footer-company">
        <h3>COMPANY</h3>
        <ul>
          <li><a href="/about">About us</a></li>
        </ul>
      </div>

      {/* Address Section */}
      <div className="footer-address">
        <h3>ADDRESS</h3>
        <p>11 Greenplace Plaza, 1092-319, P.A, 77046.</p>
        <p>4th Floor, The Address, Muthambari Drive, Eastlands, Mumbai.</p>
      </div>
    </footer>
  );
};

export default Footer;
