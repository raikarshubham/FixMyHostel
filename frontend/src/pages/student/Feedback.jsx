import { useEffect, useState } from "react";
import { getMyComplaints } from "../../api/complaintApi";

const Feedback = () => {
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    getMyComplaints().then((res) => {
      setResolved(
        res.data.complaints.filter((c) => c.status === "Resolved")
      );
    });
  }, []);

  if (!resolved.length) return <p>No resolved complaints.</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Feedback</h2>

      {resolved.map((c) => (
        <div key={c._id}>
          <h4>{c.title}</h4>
          <textarea placeholder="Your feedback" />
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
