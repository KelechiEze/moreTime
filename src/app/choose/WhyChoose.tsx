"use client";

import Image from "next/image";
import { useState } from "react";
import "./WhyChooseUs.css";

const images = [
  "/galaxy.png",
  "/nigeriancommunications.png",
  "/mtn.png",
  "/interconnect.png",
  "/mtn.png",
  "/galaxy.png",
];

const WhyChoose = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="why-choose-container">
      <h2 className="section-title">Our Trusted Partners</h2>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`carousel-content ${isPaused ? "paused" : ""}`}>
          {images.concat(images).map((src, index) => (
            <div key={index} className="carousel-item">
              <Image src={src} alt="Partner Logo" width={120} height={120} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
