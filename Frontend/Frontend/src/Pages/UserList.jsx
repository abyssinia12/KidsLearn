import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        // First, get the current user to check if they're an admin
        const {
          data: { user: currentUser },
          error: currentUserError,
        } = await supabase.auth.getUser();

        if (currentUserError) {
          throw new Error(
            "Failed to get current user: " + currentUserError.message
          );
        }

        // Check if current user is admin
        const { data: currentUserRole } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", currentUser.id)
          .single();

        if (currentUserRole?.role !== "admin") {
          throw new Error("Access denied. Admin privileges required.");
        }

        // Fetch user roles from the user_roles table
        const { data: roleData, error: roleError } = await supabase
          .from("user_roles")
          .select("*")
          .order("created_at", { ascending: false });

        if (roleError) {
          throw new Error("Failed to fetch user roles: " + roleError.message);
        }

        // Create a users table if it doesn't exist, or fetch from existing table
        // For now, we'll create a simple user list from the roles data
        const usersWithRoles = roleData.map((role) => {
          return {
            id: role.user_id,
            email: role.email || "Unknown",
            name: role.full_name || role.email?.split("@")[0] || "Unknown",
            role: role.role,
            status: role.status || "active",
            created_at: role.created_at,
            last_sign_in: role.last_sign_in,
          };
        });

        setUsers(usersWithRoles);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleApproveUser = async (userId) => {
    try {
      // Update user role to active student
      const { error } = await supabase
        .from("user_roles")
        .update({
          role: "student",
          status: "active",
        })
        .eq("user_id", userId);

      if (error) {
        throw new Error("Failed to approve user: " + error.message);
      }

      // Update local state
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId
            ? { ...user, status: "active", role: "student" }
            : user
        )
      );

      alert("User approved successfully!");
    } catch (err) {
      console.error("Error approving user:", err);
      alert("Error approving user: " + err.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      // Delete user role from the user_roles table
      const { error } = await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId);

      if (error) {
        throw new Error("Failed to delete user: " + error.message);
      }

      // Remove from local state
      setUsers((prev) => prev.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Error deleting user: " + err.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString();
  };

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
          <div
            className="admin-nav-link"
            onClick={() => navigate("/admin-dashboard")}
          >
            <span className="admin-nav-icon">🏠</span>
            Dashboard
          </div>
          <div className="admin-nav-link active">
            <span className="admin-nav-icon">👥</span>
            Users
          </div>
          <div className="admin-nav-link">
            <span className="admin-nav-icon">📚</span>
            Courses
          </div>
          <div className="admin-nav-link">
            <span className="admin-nav-icon">📈</span>
            Progress
          </div>
          <div className="admin-nav-link">
            <span className="admin-nav-icon">📊</span>
            Analytics
          </div>
          <div className="admin-nav-link">
            <span className="admin-nav-icon">⚙️</span>
            Settings
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <input className="admin-search" placeholder="Search users..." />
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

        {/* User List Content */}
        <main className="admin-dashboard-content">
          <h1 className="admin-dashboard-title">User Management</h1>
          <div className="admin-dashboard-subtitle">
            Manage all users in your learning platform.
          </div>

          <div className="user-list-container">
            {loading && (
              <div
                style={{
                  textAlign: "center",
                  color: "#888",
                  fontSize: "1.1em",
                  padding: "40px",
                }}
              >
                Loading users...
              </div>
            )}

            {error && (
              <div
                style={{
                  color: "#dc2626",
                  textAlign: "center",
                  marginBottom: 16,
                  padding: "16px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                }}
              >
                Error: {error}
              </div>
            )}

            {!loading && !error && users.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  color: "#888",
                  fontSize: "1.1em",
                  padding: "40px",
                  background: "#f9fafb",
                  borderRadius: "8px",
                }}
              >
                No users found. Users will appear here once they register.
              </div>
            )}

            {!loading && !error && users.length > 0 && (
              <div style={{ overflowX: "auto" }}>
                <table
                  className="user-list-table"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "1.05em",
                    background: "#f9fafb",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(37,99,235,0.07)",
                  }}
                >
                  <thead style={{ background: "#2563eb" }}>
                    <tr>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Name
                      </th>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Role
                      </th>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Status
                      </th>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Joined
                      </th>
                      <th
                        style={{
                          color: "#fff",
                          padding: "14px 10px",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr
                        key={user.id}
                        style={{
                          background: idx % 2 === 0 ? "#fff" : "#f3f6fa",
                          transition: "background 0.2s",
                        }}
                      >
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                        >
                          {user.name}
                        </td>
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                        >
                          {user.email}
                        </td>
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                            textTransform: "capitalize",
                            color: "#2563eb",
                            fontWeight: 600,
                          }}
                        >
                          {user.role}
                        </td>
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                            textTransform: "capitalize",
                          }}
                        >
                          <span
                            style={{
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "0.85em",
                              fontWeight: 600,
                              background:
                                user.status === "active"
                                  ? "#dcfce7"
                                  : "#fef3c7",
                              color:
                                user.status === "active"
                                  ? "#166534"
                                  : "#92400e",
                            }}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                        >
                          {formatDate(user.created_at)}
                        </td>
                        <td
                          style={{
                            padding: "12px 10px",
                            borderBottom: "1px solid #e5e7eb",
                          }}
                        >
                          <div style={{ display: "flex", gap: "8px" }}>
                            {user.status !== "active" && (
                              <button
                                style={{
                                  background: "#22c55e",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: 6,
                                  padding: "6px 12px",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  fontSize: "0.85em",
                                }}
                                onClick={() => handleApproveUser(user.id)}
                              >
                                Approve
                              </button>
                            )}
                            <button
                              style={{
                                background: "#ef4444",
                                color: "#fff",
                                border: "none",
                                borderRadius: 6,
                                padding: "6px 12px",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: "0.85em",
                              }}
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserList;
