import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Home from "./Pages/HomePage";
import LandingPage from "./src/Pages/LandingPage";
import LoginPage from "./src/Pages/LoginPage";
import AdminDashboard from "./src/Pages/AdminDashboard";
import UserList from "./src/Pages/UserList";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

export default function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}
