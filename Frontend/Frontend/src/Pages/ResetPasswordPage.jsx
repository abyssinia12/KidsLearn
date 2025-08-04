import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import "./LoginPage.css";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated (has access token from email link)
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        setMessage(
          "Invalid or expired reset link. Please request a new password reset."
        );
      }
    };
    checkAuth();
  }, []);

  const handleResetPassword = async (e) => {
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

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setMessage("Password reset failed: " + error.message);
      } else {
        setMessage(
          "Password updated successfully! You can now sign in with your new password."
        );
        setSuccess(true);
        // Clear form
        setPassword("");
        setConfirmPassword("");

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.error("Password reset error:", error);
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
            Reset Your Password
          </div>
        </div>
        <div className="login-form-side">
          <div className="login-form-box">
            <h2 className="login-title">Reset Password</h2>

            <form className="login-form" onSubmit={handleResetPassword}>
              <label htmlFor="password" className="login-label">
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="login-input"
                placeholder="Enter your new password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <label htmlFor="confirmPassword" className="login-label">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="login-input"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>

            {message && (
              <div
                className={`login-message ${success ? "login-success" : ""}`}
              >
                {message}
              </div>
            )}

            <div className="login-links">
              <button
                className="login-back-to-login"
                onClick={() => navigate("/login")}
                type="button"
              >
                ← Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
