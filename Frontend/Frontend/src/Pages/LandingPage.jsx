import React from "react";
import FeaturesGrid from "../sections/FeaturesGrid";
import HeroSection from "../sections/HeroSection";
import "./LandingPage.css";
import Navbar from "../Components/UI/Navbar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
    </div>
  );
};

export default LandingPage;
