import { useEffect, useState } from "react";
import api from "../../api/axios";

const Feedback = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/my").then((res) => {
      setComplaints(
        res.data.complaints.filter(
          (c) => c.status === "Resolved" && !c.feedback
        )
      );
    });
  }, []);

  const submitFeedback = async (id, rating, comment) => {
    await api.post(`/complaints/${id}/feedback`, {
      rating,
      comment,
    });
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Feedback</h2>

      {complaints.length === 0 && <p>No pending feedback</p>}

      {complaints.map((c) => (
        <FeedbackCard
          key={c._id}
          complaint={c}
          onSubmit={submitFeedback}
        />
      ))}
    </div>
  );
};

const FeedbackCard = ({ complaint, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
      <h4>{complaint.title}</h4>

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1,2,3,4,5].map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <br /><br />

      <textarea
        placeholder="Your feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br /><br />

      <button onClick={() => onSubmit(complaint._id, rating, comment)}>
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
