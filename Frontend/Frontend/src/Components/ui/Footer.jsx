import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    style={{
      background: "#2563eb",
      color: "#fff",
      padding: "36px 0 18px 0",
      marginTop: 60,
      fontSize: "1.05em",
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "0 24px",
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 800, fontSize: "1.3em", letterSpacing: 1 }}>
          KidsLearn
        </div>
        <div style={{ color: "#c7d6fa", marginTop: 6 }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</div>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "block",
            marginBottom: 4,
          }}
        >
          Home
        </Link>
        <Link
          to="/pricing"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "block",
            marginBottom: 4,
          }}
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          style={{ color: "#fff", textDecoration: "none", display: "block" }}
        >
          Contact
        </Link>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Contact</div>
        <div style={{ color: "#c7d6fa" }}>
          <div>
            Email:{" "}
            <a
              href="mailto:abyssiniasolomon2123@gmail.com"
              style={{ color: "#fff" }}
            >
              abyssiniasolomon2123@gmail.com
            </a>
          </div>
          <div>
            Email:{" "}
            <a
              href="mailto:hailemichaelkidist@gmail.com"
              style={{ color: "#fff" }}
            >
              hailemichaelkidist@gmail.com
            </a>
          </div>
          <div>
            Phone:{" "}
            <a href="tel:0978971996" style={{ color: "#fff" }}>
              097 897 1996
            </a>
          </div>
          <div>
            Phone:{" "}
            <a href="tel:0934329850" style={{ color: "#fff" }}>
              093 432 9850
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        textAlign: "center",
        color: "#c7d6fa",
        fontSize: "0.98em",
        marginTop: 18,
      }}
    >
      Made with ❤️ for young web developers.
    </div>
  </footer>
);

export default Footer;
