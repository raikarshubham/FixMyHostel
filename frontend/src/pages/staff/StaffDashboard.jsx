import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/dashboard.css";

const StaffDashboard = () => {
  const [assignedComplaints, setAssignedComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/complaints/assigned")
      .then((res) => {
        const active = (res.data.complaints || []).filter((c) =>
          ["Pending", "Assigned", "In Progress"].includes(c.status)
        );
        setAssignedComplaints(active);
      })
      .catch(() =>
        console.error("Failed to load assigned complaints")
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <h1>Staff Dashboard</h1>
        <p className="dashboard-subtext">
          Manage complaints assigned to you
        </p>

        {/* SUMMARY CARDS */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Active Complaints</h3>
            <p>{assignedComplaints.length}</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/staff/resolved")}
          >
            <h3>Resolved Complaints</h3>
            <p>View completed work</p>
          </div>
        </div>

        {/* ACTIVE COMPLAINT LIST */}
        <h2 style={{ marginTop: "40px" }}>Assigned Complaints</h2>

        {assignedComplaints.length === 0 && (
          <p className="dashboard-subtext">
            No active complaints assigned to you.
          </p>
        )}

        <div className="dashboard-grid">
          {assignedComplaints.map((c) => (
            <div
              key={c._id}
              className="dashboard-card"
              onClick={() => navigate(`/staff/update/${c._id}`)}
            >
              <h4>{c.title}</h4>
              <p>Category: {c.category}</p>
              <strong>Status: {c.status}</strong>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StaffDashboard;
