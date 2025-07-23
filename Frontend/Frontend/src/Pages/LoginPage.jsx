// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         if (data.role) {
//           localStorage.setItem("role", data.role);
//         }
//         if (data.role === "admin") {
//           navigate("/admin-dashboard");
//         } else if (data.role === "teacher") {
//           navigate("/teacher-dashboard");
//         } else if (data.role === "student") {
//           navigate("/course");
//         } else {
//           navigate("/page-not-found");
//         }
//       } else {
//         setMessage(data.message || "Login failed.");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
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
//             <h2 className="login-title">Sign In</h2>
//             <form className="login-form" onSubmit={handleLogin}>
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
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//             {message && <div className="login-message">{message}</div>}
//             <div className="login-links">
//               <Link to="/register" className="login-register-link">
//                 Don't have an account? Register
//               </Link>
//               <br />
//               <Link to="/" className="login-back-link">
//                 &larr; Back to Home
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  supabase  from "../supabaseClient";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Login failed: " + error.message);
    } else {
      localStorage.setItem("token", data.session.access_token);
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.user.id)
        .single();

      const role = roleData?.role;
      localStorage.setItem("role", role);

      if (role === "admin") navigate("/admin-dashboard");
      else if (role === "teacher") navigate("/teacher-dashboard");
      else if (role === "student") navigate("/course");
      else navigate("/page-not-found");
    }

    setLoading(false);
  };

  return (
    <div className="login-landscape-container">
      {/* Your existing login layout */}
      <form onSubmit={handleLogin}>
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
        <button type="submit">{loading ? "Logging in..." : "Login"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
