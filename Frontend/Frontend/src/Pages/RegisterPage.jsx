import React, { useState } from "react";
import supabase from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      setLoading(false);
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    // Validate full name
    if (!fullName.trim()) {
      setMessage("Please enter your full name.");
      setLoading(false);
      return;
    }

    try {
      // Create user in Supabase auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        setMessage("Registration failed: " + error.message);
      } else {
        // Store user role information in the user_roles table
        const { error: roleError } = await supabase.from("user_roles").insert({
          user_id: data.user.id,
          email: email,
          full_name: fullName,
          role: "student",
          status: "pending",
          created_at: new Date().toISOString(),
        });

        if (roleError) {
          console.error("Error storing user role:", roleError);
          // Don't fail registration if role storage fails
        }

        setMessage(
          "Registration successful! Please check your email to verify your account."
        );
        // Clear form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFullName("");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-landscape-container">
      <div className="login-card">
        <div className="login-image-side">
          <img
            src="/login.jpg"
            alt="Kids learning illustration"
            className="login-illustration"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <div
            style={{
              display: "none",
              textAlign: "center",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            Join KidsLearn Today
          </div>
        </div>
        <div className="login-form-side">
          <div className="login-form-box">
            <h2 className="login-title">Create Account</h2>
            <form className="login-form" onSubmit={handleRegister}>
              <label htmlFor="fullName" className="login-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="login-input"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={loading}
              />
              <label htmlFor="email" className="login-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="login-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="login-input"
                placeholder="Create a password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <label htmlFor="confirmPassword" className="login-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="login-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
            {message && <div className="login-message">{message}</div>}
            <div className="login-links">
              <Link to="/login" className="login-register-link">
                Already have an account? Sign in here
              </Link>
              <Link to="/" className="login-back-link">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
