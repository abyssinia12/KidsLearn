import React, { useEffect, useState } from "react";

// TODO: Replace with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div
      className="user-list-page"
      style={{
        maxWidth: 900,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
        padding: 32,
      }}
    >
      <h2
        style={{
          fontSize: "2em",
          fontWeight: 700,
          color: "#2563eb",
          marginBottom: 24,
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        User List
      </h2>
      {loading && (
        <div style={{ textAlign: "center", color: "#888", fontSize: "1.1em" }}>
          Loading users...
        </div>
      )}
      {error && (
        <div style={{ color: "red", textAlign: "center", marginBottom: 16 }}>
          Error: {error}
        </div>
      )}
      {!loading && !error && (
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
                  ID
                </th>
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
                      textAlign: "center",
                    }}
                  >
                    {user.id}
                  </td>
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
                    {user.status || "pending"}
                  </td>
                  <td
                    style={{
                      padding: "12px 10px",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    {user.role === "student" && user.status !== "active" ? (
                      <button
                        style={{
                          background: "#22c55e",
                          color: "#fff",
                          border: "none",
                          borderRadius: 6,
                          padding: "6px 16px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                        onClick={async () => {
                          try {
                            const token = localStorage.getItem("token");
                            const res = await fetch(
                              "http://localhost:5000/api/auth/approve-student",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${token}`,
                                },
                                body: JSON.stringify({ email: user.email }),
                              }
                            );
                            if (res.ok) {
                              setUsers((prev) =>
                                prev.map((u) =>
                                  u.id === user.id
                                    ? { ...u, status: "active" }
                                    : u
                                )
                              );
                            } else {
                              alert("Failed to approve student.");
                            }
                          } catch (err) {
                            alert("Error approving student.");
                          }
                        }}
                      >
                        Approve
                      </button>
                    ) : (
                      <span style={{ color: "#aaa" }}>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
