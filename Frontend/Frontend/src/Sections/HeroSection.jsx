import React from "react";
import heroImg from "../../public/hero1.jpg";
import Button from "../Components/Common/Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-image-wrapper">
        <img src={heroImg} alt="Kids learning" className="hero-image" />
      </div>
      <div className="hero-overlay-content">
        <h1 className="hero-title hero-title-white">Fun Learning Adventure</h1>
        <p className="hero-subtitle">
          Join us on an exciting 6-week journey of discovery! Learn numbers,
          letters, colors, and so much more through videos, activities, and
          interactive games.
        </p>
        <div className="hero-buttons">
          <Button className="hero-btn-primary">Start Learning Today</Button>
          <Button className="hero-btn-secondary">Watch Preview</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
