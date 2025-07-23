import React from "react";
import Navbar from "../Components/ui/Navbar";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f6e6ff 0%, #eaf6ff 100%)",
          padding: "60px 0",
        }}
      >
        <div
          style={{
            maxWidth: 420,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 8px 32px rgba(37,99,235,0.13)",
            padding: 40,
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              fontWeight: 800,
              marginBottom: 18,
              fontSize: "2.1em",
              letterSpacing: 1,
            }}
          >
            Pricing
          </h2>
          <div style={{ fontSize: "1.15em", color: "#444", marginBottom: 30 }}>
            Get full access to our 6-week web development course for kids!
          </div>
          <div
            style={{
              fontSize: "2.5em",
              fontWeight: 900,
              color: "#22c55e",
              marginBottom: 10,
              letterSpacing: 1,
            }}
          >
            3000 ETB
          </div>
          <div style={{ color: "#888", fontSize: "1em", marginBottom: 24 }}>
            One-time payment for all lessons, activities, and projects.
            <br />
            No hidden fees.
          </div>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "14px 38px",
              fontWeight: 700,
              fontSize: "1.1em",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(37,99,235,0.10)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onClick={() => navigate("/contact")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
