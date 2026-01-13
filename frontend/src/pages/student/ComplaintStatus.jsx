import Navbar from "../../components/Navbar";
import "../../styles/timeline.css";

const ComplaintStatus = () => {
  // Mock timeline data
  const timeline = [
    {
      status: "Raised",
      time: "12 Jan 2026, 10:30 AM",
      updatedBy: "Student",
      completed: true,
    },
    {
      status: "Assigned",
      time: "12 Jan 2026, 12:00 PM",
      updatedBy: "Admin",
      completed: true,
    },
    {
      status: "In Progress",
      time: "13 Jan 2026, 09:15 AM",
      updatedBy: "Maintenance Staff",
      completed: true,
    },
    {
      status: "Resolved",
      time: "14 Jan 2026, 04:40 PM",
      updatedBy: "Maintenance Staff",
      completed: false,
    },
    {
      status: "Closed",
      time: "",
      updatedBy: "",
      completed: false,
    },
  ];

  return (
    <>
      <Navbar title="Complaint Status" />

      <div className="timeline-page">
        <h2>Complaint Status Timeline</h2>

        <div className="timeline">
          {timeline.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div
                className={`timeline-dot ${
                  step.completed ? "completed" : ""
                }`}
              ></div>

              <div className="timeline-content">
                <h3>{step.status}</h3>

                {step.time && (
                  <>
                    <p className="timeline-time">{step.time}</p>
                    <p className="timeline-by">
                      Updated by: {step.updatedBy}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComplaintStatus;
