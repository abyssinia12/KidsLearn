import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import LandingPage from "./src/Pages/LandingPage";
import LoginPage from "./src/Pages/LoginPage";
import AdminDashboard from "./src/Pages/AdminDashboard";
import UserList from "./src/Pages/UserList";
import { Index } from "./src/Pages/Index1";
import { CourseWeek } from "./src/Components/Courseweek";

// Week data (should match Index1.jsx)
const weeks = [
  {
    week: 1,
    title: "Introduction to Web Development",
    description: "Dive into the world of web development, learn basic concepts and set up your tools.",
    activitiesCount: 1,
    badgeColor: "hsl(210, 85%, 55%)",
    cardBg: "hsl(210, 60%, 95%)",
    cardBorder: "hsl(210, 40%, 85%)",
    playIconColor: "hsl(210, 85%, 55%)",
    topics: [
      "How to Install & Use SPCK Editor",
      "Introduction to Computers & Programming",
      "What is a Website?",
      "HTML Basic Tags"
    ]
  },
  {
    week: 2,
    title: "Styling with CSS",
    description: "Master the art of styling with CSS: selectors, properties, and combining styles.",
    activitiesCount: 1,
    badgeColor: "hsl(120, 75%, 45%)",
    cardBg: "hsl(120, 50%, 95%)",
    cardBorder: "hsl(120, 30%, 85%)",
    playIconColor: "hsl(120, 75%, 45%)",
    topics: [
      "CSS Syntax and Selectors",
      "Applying Colors and Fonts",
      "Box Model and Spacing",
      "Combining CSS Classes"
    ]
  },
  {
    week: 3,
    title: "Web Page Layout & Structure",
    description: "Learn to arrange elements on a page using div, span, classes, and basic layout techniques.",
    activitiesCount: 1,
    badgeColor: "hsl(280, 80%, 60%)",
    cardBg: "hsl(280, 50%, 95%)",
    cardBorder: "hsl(280, 30%, 85%)",
    playIconColor: "hsl(280, 80%, 60%)",
    topics: [
      "Using div and span",
      "Structuring with HTML5 semantic tags",
      "Class and ID attributes",
      "Basic layout with Flexbox"
    ]
  },
  {
    week: 4,
    title: "Introduction to JavaScript",
    description: "Kickstart your journey into interactive web pages with JavaScript fundamentals.",
    activitiesCount: 1,
    badgeColor: "hsl(45, 95%, 60%)",
    cardBg: "hsl(45, 80%, 95%)",
    cardBorder: "hsl(45, 60%, 85%)",
    playIconColor: "hsl(45, 95%, 60%)",
    topics: [
      "JavaScript Variables and Data Types",
      "Basic Operators",
      "Writing Functions",
      "Using Alerts and Console.log"
    ]
  },
  {
    week: 5,
    title: "JavaScript & DOM Manipulation",
    description: "Learn to interact with the Document Object Model to dynamically change web content.",
    activitiesCount: 1,
    badgeColor: "hsl(15, 90%, 55%)",
    cardBg: "hsl(15, 80%, 95%)",
    cardBorder: "hsl(15, 60%, 85%)",
    playIconColor: "hsl(15, 90%, 55%)",
    topics: [
      "What is the DOM?",
      "Selecting Elements with JavaScript",
      "Changing Content and Styles",
      "Handling Events"
    ]
  },
  {
    week: 6,
    title: "Final Projects",
    description: "Apply everything you've learned to build two exciting final projects.",
    activitiesCount: 2,
    badgeColor: "hsl(350, 80%, 55%)",
    cardBg: "hsl(350, 60%, 95%)",
    cardBorder: "hsl(350, 40%, 85%)",
    playIconColor: "hsl(350, 80%, 55%)",
    topics: [
      "Project 1: Personal Portfolio Website",
      "Project 2: Interactive Web App",
      "Showcasing Your Work",
      "Review and Presentation"
    ]
  },
];

function CourseWeekWrapper() {
  const { weekNumber } = useParams();
  const week = weeks.find((w) => w.week === Number(weekNumber));
  if (!week) return <div>Week not found</div>;
  return <CourseWeek week={week} />;
}

export default function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/users" element={<UserList />} />
        <Route path="/course" element={<Index />} />
        <Route path="/week/:weekNumber" element={<CourseWeekWrapper />} />
      </Routes>
    </Router>
  );
}
