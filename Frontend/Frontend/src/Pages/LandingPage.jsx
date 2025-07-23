import React from "react";
import FeaturesGrid from "../Sections/FeaturesGrid";
import HeroSection from "../Sections/HeroSection";
import "./LandingPage.css";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <Footer />
    </div>
  );
};

export default LandingPage;
