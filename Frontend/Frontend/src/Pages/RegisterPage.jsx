// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (data.role === "admin") {
//           navigate("/admin-dashboard");
//         } else if (data.role === "teacher") {
//           navigate("/teacher-dashboard");
//         } else {
//           navigate("/course");
//         }
//       } else {
//         setMessage(data.message || "Registration failed.");
//         setShowPopup(true);
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//       setShowPopup(true);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="login-landscape-container">
//       <div className="login-card">
//         <div className="login-image-side">
//           <img
//             src="/login.jpg"
//             alt="Kids learning illustration"
//             className="login-illustration"
//           />
//         </div>
//         <div className="login-form-side">
//           <div className="login-form-box">
//             <h2 className="login-title">Sign Up</h2>
//             <form className="login-form" onSubmit={handleRegister}>
//               <label htmlFor="email" className="login-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="login-input"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label htmlFor="password" className="login-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="login-input"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button type="submit" className="login-btn" disabled={loading}>
//                 {loading ? "Registering..." : "Register"}
//               </button>
//             </form>
//             <div className="login-links">
//               <Link to="/login">Already have an account? Login</Link>
//               <br />
//               <Link to="/">&larr; Back to Home</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             background: "rgba(0,0,0,0.25)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               color: message.includes("success") ? "#22c55e" : "#e11d48",
//               padding: "32px 36px",
//               borderRadius: 16,
//               boxShadow: "0 8px 32px rgba(37,99,235,0.13)",
//               fontSize: "1.15em",
//               fontWeight: 600,
//               minWidth: 320,
//               textAlign: "center",
//             }}
//           >
//             {message}
//             <br />
//             <button
//               style={{
//                 marginTop: 18,
//                 background: "#2563eb",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: 8,
//                 padding: "8px 24px",
//                 fontWeight: 600,
//                 fontSize: "1em",
//                 cursor: "pointer",
//               }}
//               onClick={() => setShowPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from "react";
import  supabase  from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Registration successful! Please check your email.");
    }

    setLoading(false);
  };

  return (
    <div className="login-landscape-container">
      {/* Your existing register layout */}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{loading ? "Registering..." : "Register"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
