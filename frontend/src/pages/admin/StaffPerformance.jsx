import { useEffect, useState } from "react";
import api from "../../api/axios";

const StaffPerformance = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints").then((res) => {
      setComplaints(
        res.data.complaints.filter((c) => c.feedback && c.assignedStaff)
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
    <div style={{ padding: "40px" }}>
      <h2>Staff Performance</h2>

      {Object.values(staffMap).map((s) => (
        <div
          key={s.staff._id}
          style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}
        >
          <h4>{s.staff.name}</h4>
          <p>Email: {s.staff.email}</p>

          <p>
            Average Rating:{" "}
            {(
              s.ratings.reduce((a, b) => a + b, 0) / s.ratings.length
            ).toFixed(1)}
          </p>

          <ul>
            {s.feedbacks.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StaffPerformance;
