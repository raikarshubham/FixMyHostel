import { useState } from "react";
import { createComplaint } from "../../api/complaintApi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/raiseComplaint.css";

const RaiseComplaint = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Medium",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await createComplaint(formData);
      setMessage("success");

      setFormData({
        title: "",
        description: "",
        category: "",
        priority: "Medium",
      });
    } catch (error) {
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="raise-page">
        <div className="raise-card">
          <h1>Raise a Complaint</h1>
          <p className="raise-subtext">
            Report any hostel-related issue and track its resolution
          </p>

          {message === "success" && (
            <p className="success-text">Complaint raised successfully</p>
          )}
          {message === "error" && (
            <p className="error-text">Failed to raise complaint</p>
          )}

          <form onSubmit={handleSubmit}>
            <label>Complaint Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Water leakage in bathroom"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              placeholder="Describe the issue in detail"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Water, Electricity, Cleanliness..."
              value={formData.category}
              onChange={handleChange}
              required
            />

            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Complaint"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RaiseComplaint;
