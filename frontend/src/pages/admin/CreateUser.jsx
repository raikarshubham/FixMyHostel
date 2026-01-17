import { useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/createUser.css";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "staff",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await api.post("/users/create", formData);

      setSuccess(`${formData.role} created successfully`);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "staff",
      });
    } catch (err) {
      setError(err.response?.data?.message || "User creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="create-user-page">
        <div className="create-user-card">
          <h1>Create Staff / Admin</h1>
          <p className="subtext">
            Add new staff members or administrators
          </p>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Temporary Password</label>
            <input
              type="password"
              name="password"
              placeholder="Set temporary password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>User Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateUser;
