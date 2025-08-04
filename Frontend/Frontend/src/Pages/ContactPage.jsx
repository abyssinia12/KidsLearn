import React from "react";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";

const iconStyle = {
  fontSize: 28,
  color: "#2563eb",
  marginRight: 12,
  verticalAlign: "middle",
};

const ContactPage = () => (
  <>
    <Navbar />
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eaf6ff 0%, #f6e6ff 100%)",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          maxWidth: 480,
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
            marginBottom: 24,
            fontSize: "2.2em",
            letterSpacing: 1,
          }}
        >
          Contact Us
        </h2>
        <div style={{ fontSize: "1.15em", marginBottom: 30, color: "#444" }}>
          <div
            style={{
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={iconStyle}>📧</span>
            <div style={{ textAlign: "left" }}>
              <a
                href="mailto:abyssiniasolomon2123@gmail.com"
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                abyssiniasolomon2123@gmail.com
              </a>
              <br />
              <a
                href="mailto:hailemichaelkidist@gmail.com"
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                hailemichaelkidist@gmail.com
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={iconStyle}>📞</span>
            <div style={{ textAlign: "left" }}>
              <a
                href="tel:0984180404"
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                098 418 0404
              </a>
              <br />
              <a
                href="tel:0934329850"
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                093 432 9850
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32, color: "#888", fontSize: "0.98em" }}>
          We’re here to help! Reach out to us by email or phone and we’ll get
          back to you as soon as possible.
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ContactPage;
