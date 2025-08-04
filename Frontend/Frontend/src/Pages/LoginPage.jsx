import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage("Login failed: " + error.message);
      } else {
        localStorage.setItem("token", data.session.access_token);

        // Get user role
        const { data: roleData, error: roleError } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.user.id)
          .single();

        if (roleError) {
          console.error("Error fetching user role:", roleError);
          setMessage("Error fetching user role. Please try again.");
          return;
        }

        const role = roleData?.role || "student";
        localStorage.setItem("role", role);

        // Navigate based on role
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "teacher") {
          navigate("/teacher-dashboard");
        } else if (role === "student") {
          navigate("/course");
        } else {
          navigate("/course"); // Default to course for unknown roles
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setForgotPasswordLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        forgotPasswordEmail,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      if (error) {
        setMessage("Password reset failed: " + error.message);
      } else {
        setMessage(
          "Password reset email sent! Please check your email to reset your password."
        );
        setShowForgotPassword(false);
        setForgotPasswordEmail("");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setForgotPasswordLoading(false);
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
            Welcome to KidsLearn
          </div>
        </div>
        <div className="login-form-side">
          <div className="login-form-box">
            <h2 className="login-title">Welcome Back</h2>

            {!showForgotPassword ? (
              <>
                <form className="login-form" onSubmit={handleLogin}>
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
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                  <button
                    className="login-forgot-link"
                    onClick={() => setShowForgotPassword(true)}
                    type="button"
                  >
                    Forgot your password?
                  </button>
                  <button
                    type="submit"
                    className="login-btn"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </form>
                {message && <div className="login-message">{message}</div>}
                <div className="login-links">
                  <Link to="/register" className="login-register-link">
                    Don't have an account? Create one here
                  </Link>
                  <Link to="/" className="login-back-link">
                    ← Back to Home
                  </Link>
                </div>
              </>
            ) : (
              <>
                <form className="login-form" onSubmit={handleForgotPassword}>
                  <label htmlFor="forgotEmail" className="login-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="forgotEmail"
                    className="login-input"
                    placeholder="Enter your email address"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    required
                    disabled={forgotPasswordLoading}
                  />
                  <button
                    type="submit"
                    className="login-btn"
                    disabled={forgotPasswordLoading}
                  >
                    {forgotPasswordLoading ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>
                {message && <div className="login-message">{message}</div>}
                <div className="login-links">
                  <button
                    className="login-back-to-login"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setMessage("");
                      setForgotPasswordEmail("");
                    }}
                    type="button"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
