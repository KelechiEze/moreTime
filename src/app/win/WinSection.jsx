"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./WinSection.css"; // Import the CSS file

const winData = [
  {
    id: 1,
    title: "Personal Loans",
    description:
      "Get fast and hassle-free loans to cover emergencies, bills, or personal projects—with flexible repayment options that work for you.",
    image: "/casual.png", // Replace with correct image path
  },
  {
    id: 2,
    title: "Business Loans",
    description:
      "Expand your business with flexible loan options tailored to meet your financial needs and growth plans.",
    image: "/loanfree.png", // Replace with correct image path
  },
  {
    id: 3,
    title: "Auto Loans",
    description:
      "Drive your dream car with affordable auto loans that come with low-interest rates and flexible repayment terms.",
    image: "/casual.png", // Replace with correct image path
  },
];

const WinSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="win-section">
      <h1 className="win-title">Our Solutions</h1>

      {/* Tabs */}
      <div className="win-tabs">
        {winData.map((item, index) => (
          <span
            key={item.id}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="win-content">
        <div className="win-image">
          <Image
            src={winData[activeTab].image}
            alt={winData[activeTab].title}
            width={250}
            height={250}
          />
        </div>
        <div className="win-text">
          <p>{winData[activeTab].description}</p>
          <button className="win-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default WinSection;
