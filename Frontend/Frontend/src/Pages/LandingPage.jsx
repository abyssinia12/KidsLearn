import React from "react";
import FeaturesGrid from "../Sections/FeaturesGrid";
import HeroSection from "../Sections/HeroSection";
import "./LandingPage.css"; 
import Navbar from "../Components/ui/Navbar";

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
