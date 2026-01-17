import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const StaffDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/complaints/assigned")
      .then((res) => {
        setComplaints(res.data.complaints);
      })
      .catch((err) => {
        console.error("Failed to load assigned complaints", err);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Assigned Complaints</h2>

      {complaints.length === 0 && (
        <p>No complaints assigned to you.</p>
      )}

      {complaints.map((c) => (
        <div
          key={c._id}
          onClick={() => navigate(`/staff/update/${c._id}`)}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "12px",
            cursor: "pointer",
          }}
        >
          <h4>{c.title}</h4>
          <p>Category: {c.category}</p>
          <strong>Status: {c.status}</strong>
        </div>
      ))}
    </div>
  );
};

export default StaffDashboard;
