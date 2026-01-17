import { useEffect, useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/staffPerformance.css";

const StaffPerformance = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints").then((res) => {
      setComplaints(
        (res.data.complaints || []).filter(
          (c) => c.feedback && c.assignedStaff
        )
      );
    });
  }, []);

  const staffMap = {};

  complaints.forEach((c) => {
    const staffId = c.assignedStaff._id;
    if (!staffMap[staffId]) {
      staffMap[staffId] = {
        staff: c.assignedStaff,
        ratings: [],
        feedbacks: [],
      };
    }
    staffMap[staffId].ratings.push(c.feedback.rating);
    staffMap[staffId].feedbacks.push(c.feedback.comment);
  });

  return (
    <>
      <Navbar />

      <div className="staff-performance-page">
        <div className="staff-performance-container">
          <h1>Staff Performance</h1>
          <p className="subtext">
            Feedback and ratings submitted by students
          </p>

          {Object.values(staffMap).length === 0 && (
            <p className="empty-text">No feedback data available.</p>
          )}

          <div className="staff-performance-grid">
            {Object.values(staffMap).map((s) => {
              const avgRating =
                s.ratings.reduce((a, b) => a + b, 0) / s.ratings.length;

              return (
                <div className="staff-card" key={s.staff._id}>
                  <h3>{s.staff.name}</h3>
                  <p className="staff-email">{s.staff.email}</p>

                  <div className="rating-box">
                    ⭐ {avgRating.toFixed(1)} / 5
                  </div>

                  <div className="feedback-list">
                    {s.feedbacks.map((f, i) => (
                      <p key={i} className="feedback-item">
                        “{f}”
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StaffPerformance;
