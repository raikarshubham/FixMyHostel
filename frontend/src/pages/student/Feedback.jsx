import { useEffect, useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/feedback.css";

const Feedback = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/my").then((res) => {
      const pending = (res.data.complaints || []).filter(
        (c) => c.status === "Resolved" && !c.feedback
      );
      setComplaints(pending);
    });
  }, []);

  const submitFeedback = async (id, rating, comment) => {
    await api.post(`/complaints/${id}/feedback`, { rating, comment });
    setComplaints((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="feedback-page">
        <div className="feedback-container">
          <h1>Feedback</h1>
          <p className="feedback-subtext">
            Share your experience for resolved complaints
          </p>

          {complaints.length === 0 && (
            <p className="empty-text">No pending feedback.</p>
          )}

          <div className="feedback-grid">
            {complaints.map((c) => (
              <FeedbackCard
                key={c._id}
                complaint={c}
                onSubmit={submitFeedback}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const FeedbackCard = ({ complaint, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <div className="feedback-card">
      <h3>{complaint.title}</h3>

      <label>Rating</label>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <label>Comment</label>
      <textarea
        placeholder="Your feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={() => onSubmit(complaint._id, rating, comment)}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
