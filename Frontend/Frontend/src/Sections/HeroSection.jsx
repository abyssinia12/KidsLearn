import React from "react";
import heroImg from "../../public/hero1.jpg";
import Button from "../Components/Common/Button";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleStartLearning = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === "student") {
      navigate("/course");
    } else {
      navigate("/register");
    }
  };
  return (
    <section className="hero-section" id="home">
      <div className="hero-image-wrapper">
        <img src={heroImg} alt="Kids learning" className="hero-image" />
      </div>
      <div className="hero-overlay-content">
        <h1 className="hero-title hero-title-white">Fun Learning Adventure</h1>
        <p className="hero-subtitle">
          Embark on a 6-week web development adventure! Learn HTML, CSS, and
          JavaScript step by step, and build real projects while having fun with
          interactive lessons and activities.
        </p>
        <div className="hero-buttons">
          <Button className="hero-btn-primary" onClick={handleStartLearning}>
            Start Learning Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
