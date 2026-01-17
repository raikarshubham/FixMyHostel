import { useEffect, useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/dashboard.css";

const ResolvedComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api
      .get("/complaints/resolved")
      .then((res) => setComplaints(res.data.complaints || []))
      .catch(() =>
        console.error("Failed to load resolved complaints")
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <h1>Resolved Complaints</h1>

        {complaints.length === 0 && (
          <p className="dashboard-subtext">
            No resolved complaints yet.
          </p>
        )}

        <div className="dashboard-grid">
          {complaints.map((c) => (
            <div key={c._id} className="dashboard-card">
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

export default ResolvedComplaints;
