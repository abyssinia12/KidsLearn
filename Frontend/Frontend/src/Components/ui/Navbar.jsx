import React, { useState, useEffect } from "react";
import Button from "../Common/Button";
import { useNavigate, Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./Navbar.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Navbar = ({ minimal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/");
  };

  if (minimal) {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-flex">
            <div className="navbar-logo-group">
              <div className="navbar-logo-bg">
                <span className="navbar-logo-text">K</span>
              </div>
              <span className="navbar-title">KidsLearn</span>
            </div>
            <div className="navbar-buttons">
              {isLoggedIn && (
                <Button className="navbar-signin-btn" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

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
            <Link to="/" className="navbar-link">
              Home
              <span className="navbar-link-underline"></span>
            </Link>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const targetElement = document.getElementById("features");
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="navbar-link"
            >
              Features
              <span className="navbar-link-underline"></span>
            </a>
            <Link to="/pricing" className="navbar-link">
              Pricing
              <span className="navbar-link-underline"></span>
            </Link>
            <Link to="/contact" className="navbar-link">
              Contact
              <span className="navbar-link-underline"></span>
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="navbar-buttons">
            {isLoggedIn ? (
              <Button className="navbar-signin-btn" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button
                className="navbar-signin-btn"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            )}
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
              <Link to="/" className="navbar-mobile-link">
                Home
              </Link>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const targetElement = document.getElementById("features");
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="navbar-mobile-link"
              >
                Features
              </a>
              <Link to="/pricing" className="navbar-mobile-link">
                Pricing
              </Link>
              <Link to="/contact" className="navbar-mobile-link">
                Contact
              </Link>
              <div className="navbar-mobile-btns">
                {isLoggedIn ? (
                  <Button
                    className="navbar-mobile-signin-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    className="navbar-mobile-signin-btn"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
