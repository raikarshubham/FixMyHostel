import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyComplaints } from "../../api/complaintApi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/myComplaints.css";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyComplaints().then((res) => {
      setComplaints(res.data.complaints || []);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="mycomplaints-page">
        <h1>My Complaints</h1>
        <p className="mycomplaints-subtext">
          Click on a complaint to view details and status timeline
        </p>

        {complaints.length === 0 && (
          <p className="empty-text">No complaints raised yet.</p>
        )}

        <div className="mycomplaints-grid">
          {complaints.map((c) => (
            <div
              key={c._id}
              className="mycomplaint-card"
              onClick={() => navigate(`/student/complaints/${c._id}`)}
            >
              <h3>{c.title}</h3>
              <p className="category">{c.category}</p>
              <span className={`status ${c.status.toLowerCase()}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyComplaints;
