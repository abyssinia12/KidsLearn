import React from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const sidebarLinks = [
  { icon: "🏠", label: "Dashboard", active: true },
  { icon: "👥", label: "Users" },
  { icon: "📚", label: "Courses" },
  { icon: "📈", label: "Progress" },
  { icon: "📊", label: "Analytics" },
  { icon: "⚙️", label: "Settings" },
];

const dashboardStats = [
  {
    label: "Total Students",
    value: "1,247",
    change: "+12% from last month",
    icon: "👤",
  },
  {
    label: "Active Courses",
    value: "24",
    change: "+3 from last month",
    icon: "📚",
  },
  {
    label: "Completion Rate",
    value: "87%",
    change: "+5% from last month",
    icon: "📈",
  },
  {
    label: "Certificates Earned",
    value: "342",
    change: "+28 from last month",
    icon: "🏅",
  },
];

const recentActivity = [
  {
    name: "Emma Johnson",
    action: "Completed Math Level 1",
    time: "2 minutes ago",
  },
  {
    name: "Liam Smith",
    action: "Started Science Adventure",
    time: "5 minutes ago",
  },
  {
    name: "Olivia Brown",
    action: "Earned Reading Badge",
    time: "10 minutes ago",
  },
  {
    name: "Noah Davis",
    action: "Finished Art Project",
    time: "15 minutes ago",
  },
  { name: "Ava Wilson", action: "Joined Coding Club", time: "20 minutes ago" },
];

const quickActions = [
  { icon: "👤", label: "Add Student", desc: "Create new user account" },
  { icon: "📚", label: "New Course", desc: "Create learning content" },
  { icon: "📈", label: "View Reports", desc: "Analytics & insights" },
  { icon: "🏅", label: "Certificates", desc: "Manage achievements" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-root">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="admin-logo-icon">🟦</span>
          <div>
            <div className="admin-logo-title">KidsLearn</div>
            <div className="admin-logo-sub">Admin Panel</div>
          </div>
        </div>
        <nav className="admin-nav">
          {sidebarLinks.map((link, idx) => (
            <div
              key={link.label}
              className={`admin-nav-link${link.active ? " active" : ""}`}
              onClick={() => {
                if (link.label === "Users") navigate("/admin-dashboard/users");
              }}
              style={{ cursor: link.label === "Users" ? "pointer" : "default" }}
            >
              <span className="admin-nav-icon">{link.icon}</span>
              {link.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <input className="admin-search" placeholder="Search..." />
          <div className="admin-topbar-icons">
            <span className="admin-topbar-icon">🔔</span>
            <span className="admin-topbar-icon">👤</span>
            <button
              style={{
                marginLeft: 16,
                padding: "8px 18px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1em",
                transition: "background 0.2s",
              }}
              onClick={() => navigate("/login")}
            >
              Log Out
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="admin-dashboard-content">
          <h1 className="admin-dashboard-title">Dashboard</h1>
          <div className="admin-dashboard-subtitle">
            Welcome back! Here's what's happening with your learning platform.
          </div>

          {/* Stats Cards */}
          <div className="admin-stats-cards">
            {dashboardStats.map((stat) => (
              <div className="admin-stat-card" key={stat.label}>
                <div className="admin-stat-label">{stat.label}</div>
                <div className="admin-stat-value-row">
                  <span className="admin-stat-value">{stat.value}</span>
                  <span className="admin-stat-icon">{stat.icon}</span>
                </div>
                <div className="admin-stat-change">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Activity and Quick Actions */}
          <div className="admin-dashboard-row">
            <div className="admin-activity-card">
              <div className="admin-activity-title">Recent Activity</div>
              <ul className="admin-activity-list">
                {recentActivity.map((item, idx) => (
                  <li key={idx} className="admin-activity-item">
                    <span className="admin-activity-name">{item.name}</span>{" "}
                    {item.action}
                    <span className="admin-activity-time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="admin-quick-actions-card">
              <div className="admin-quick-actions-title">Quick Actions</div>
              <div className="admin-quick-actions-grid">
                {quickActions.map((action) => (
                  <div className="admin-quick-action" key={action.label}>
                    <span className="admin-quick-action-icon">
                      {action.icon}
                    </span>
                    <div className="admin-quick-action-label">
                      {action.label}
                    </div>
                    <div className="admin-quick-action-desc">{action.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
