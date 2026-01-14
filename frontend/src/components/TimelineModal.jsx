import "../styles/timeline.css";

const TimelineModal = ({ complaint, onClose }) => {
  if (!complaint) return null;

  const timeline = [
    { status: "Raised", completed: true },
    { status: "Assigned", completed: true },
    { status: "In Progress", completed: false },
    { status: "Resolved", completed: false },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>{complaint.title}</h3>

        <div className="timeline">
          {timeline.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div
                className={`timeline-dot ${
                  step.completed ? "completed" : ""
                }`}
              ></div>
              <div className="timeline-content">
                <h4>{step.status}</h4>
              </div>
            </div>
          ))}
        </div>

        <button className="submit-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TimelineModal;
