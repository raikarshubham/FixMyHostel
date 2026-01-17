import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComplaintById } from "../../api/complaintApi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/complaintDetail.css";

const ComplaintDetail = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    getComplaintById(id).then((res) => {
      setComplaint(res.data.complaint);
    });
  }, [id]);

  if (!complaint) {
    return <p className="loading-text">Loading complaint...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="complaint-detail-page">
        <div className="complaint-detail-card">
          <h1>{complaint.title}</h1>

          <div className="complaint-meta">
            <span><b>Category:</b> {complaint.category}</span>
            <span><b>Status:</b> {complaint.status}</span>
          </div>

          <p className="complaint-description">
            {complaint.description}
          </p>

          <h2 className="timeline-heading">Status Timeline</h2>

          <div className="timeline">
            {complaint.timeline.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot completed"></div>

                <div className="timeline-content">
                  <h3>{step.status}</h3>
                  {step.note && <p>{step.note}</p>}
                  <span className="timeline-role">
                    Updated by: {step.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ComplaintDetail;
