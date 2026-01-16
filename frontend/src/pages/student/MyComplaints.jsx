import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyComplaints } from "../../api/complaintApi";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyComplaints().then((res) => {
      setComplaints(res.data.complaints);
    });
  }, []);

  if (!complaints.length) return <p>No complaints yet.</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>My Complaints</h2>

      {complaints.map((c) => (
        <div
          key={c._id}
          onClick={() => navigate(`/student/complaints/${c._id}`)}
          style={{
            border: "1px solid #ccc",
            padding: 16,
            marginBottom: 12,
            cursor: "pointer",
          }}
        >
          <h4>{c.title}</h4>
          <p>{c.category}</p>
          <strong>Status: {c.status}</strong>
        </div>
      ))}
    </div>
  );
};

export default MyComplaints;
