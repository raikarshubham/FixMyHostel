import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const StaffDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/complaints")
      .then((res) => {
        // backend returns only assigned complaints for staff
        setComplaints(res.data.complaints || []);
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Assigned Complaints</h2>

      {!complaints.length && <p>No complaints assigned.</p>}

      {complaints.map((c) => (
        <div
          key={c._id}
          onClick={() => navigate(`/staff/update/${c._id}`)}
          style={{
            border: "1px solid #ccc",
            padding: 16,
            marginBottom: 12,
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
