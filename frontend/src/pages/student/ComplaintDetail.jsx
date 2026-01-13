import Navbar from "../../components/Navbar";
import "../../styles/detail.css";

const ComplaintDetail = () => {
  // Mock complaint data
  const complaint = {
    title: "Water leakage in bathroom",
    category: "Water",
    priority: "High",
    status: "In Progress",
    date: "12 Jan 2026",
    description:
      "There is continuous water leakage from the bathroom pipe causing water accumulation.",
  };

  const timeline = [
    {
      status: "Raised",
      time: "12 Jan 2026, 10:30 AM",
      by: "Student",
      completed: true,
    },
    {
      status: "Assigned",
      time: "12 Jan 2026, 12:00 PM",
      by: "Admin",
      completed: true,
    },
    {
      status: "In Progress",
      time: "13 Jan 2026, 09:15 AM",
      by: "Maintenance Staff",
      completed: true,
    },
    {
      status: "Resolved",
      time: "",
      by: "",
      completed: false,
    },
  ];

  return (
    <>
      <Navbar title="Complaint Details" />

      <div className="detail-page">
        {/* Header */}
        <div className="detail-header">
          <h2>{complaint.title}</h2>
          <span className="detail-status">{complaint.status}</span>
        </div>

        {/* Meta */}
        <div className="detail-meta">
          <span>Category: {complaint.category}</span>
          <span>Priority: {complaint.priority}</span>
          <span>Date: {complaint.date}</span>
        </div>

        {/* Description */}
        <div className="detail-section">
          <h3>Description</h3>
          <p>{complaint.description}</p>
        </div>

        {/* Timeline */}
        <div className="detail-section">
          <h3>Status Timeline</h3>

          <div className="detail-timeline">
            {timeline.map((step, index) => (
              <div className="detail-timeline-item" key={index}>
                <div
                  className={`detail-dot ${
                    step.completed ? "completed" : ""
                  }`}
                ></div>

                <div className="detail-content">
                  <h4>{step.status}</h4>
                  {step.time && (
                    <>
                      <p className="detail-time">{step.time}</p>
                      <p className="detail-by">Updated by: {step.by}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintDetail;
