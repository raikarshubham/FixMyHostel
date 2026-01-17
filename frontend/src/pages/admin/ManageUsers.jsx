import { useEffect, useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/manageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const loadUsers = () => {
    api
      .get("/users")
      .then((res) => setUsers(res.data.users))
      .catch(() => setError("Failed to load users"));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await api.delete(`/users/${id}`);
      loadUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="manage-page">
        <h1>Manage Users</h1>

        {error && <p className="error-text">{error}</p>}

        <div className="user-grid">
          {users.map((u) => (
            <div key={u._id} className="user-card">
              <h3>{u.name}</h3>
              <p>{u.email}</p>

              <span className={`role-badge role-${u.role}`}>
                {u.role}
              </span>

              <button
                className="danger-btn"
                onClick={() => deleteUser(u._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {!users.length && (
          <p className="dashboard-subtext">No users found.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ManageUsers;
