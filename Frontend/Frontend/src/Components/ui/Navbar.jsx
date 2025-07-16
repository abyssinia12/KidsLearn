import React, { useState } from "react";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle smooth scrolling for anchor links
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-flex">
          {/* Logo */}
          <div className="navbar-logo-group">
            <div className="navbar-logo-bg">
              <span className="navbar-logo-text">K</span>
            </div>
            <span className="navbar-title">KidsLearn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "home")}
              className="navbar-link"
            >
              Home
              <span className="navbar-link-underline"></span>
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavLinkClick(e, "features")}
              className="navbar-link"
            >
              Features
              <span className="navbar-link-underline"></span>
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavLinkClick(e, "pricing")}
              className="navbar-link"
            >
              Pricing
              <span className="navbar-link-underline"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, "contact")}
              className="navbar-link"
            >
              Contact
              <span className="navbar-link-underline"></span>
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="navbar-buttons">
            <Button className="navbar-signin-btn" onClick={handleLoginClick}>
              Sign In
            </Button>
            <Button className="navbar-getstarted-btn">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-menu-btn">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-mobile-btn"
            >
              <svg
                className="navbar-mobile-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navbar-mobile-nav">
            <div className="navbar-mobile-links">
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "home")}
                className="navbar-mobile-link"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => handleNavLinkClick(e, "features")}
                className="navbar-mobile-link"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavLinkClick(e, "pricing")}
                className="navbar-mobile-link"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, "contact")}
                className="navbar-mobile-link"
              >
                Contact
              </a>
              <div className="navbar-mobile-btns">
                <Button
                  className="navbar-mobile-signin-btn"
                  onClick={handleLoginClick}
                >
                  Sign In
                </Button>
                <Button className="navbar-mobile-getstarted-btn">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
