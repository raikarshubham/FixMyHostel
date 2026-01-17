import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/allComplaints.css";

const AllComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/complaints")
      .then((res) => setComplaints(res.data.complaints || []))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />

      <div className="all-complaints-page">
        <div className="all-complaints-container">
          <h1>All Complaints</h1>

          {!complaints.length && (
            <p className="empty-text">No complaints found.</p>
          )}

          <div className="complaints-grid">
            {complaints.map((c) => (
              <div
                key={c._id}
                className="complaint-card"
                onClick={() => navigate(`/admin/assign/${c._id}`)}
              >
                <h3>{c.title}</h3>
                <p className="student-name">
                  Student: {c.student?.name || "N/A"}
                </p>
                <span className="status-badge">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllComplaints;
