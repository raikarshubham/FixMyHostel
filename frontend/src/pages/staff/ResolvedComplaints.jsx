import { useEffect, useState } from "react";
import api from "../../api/axios";

const ResolvedComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints")
      .then((res) => {
        setComplaints(
          (res.data.complaints || []).filter(c => c.status === "Resolved")
        );
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Resolved Complaints</h2>

      {!complaints.length && <p>No resolved complaints.</p>}

      {complaints.map(c => (
        <div key={c._id}>
          <h4>{c.title}</h4>
          <p>{c.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ResolvedComplaints;
