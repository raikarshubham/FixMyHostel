import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/list.css";

const MyComplaints = () => {
  const navigate = useNavigate();

  // Mock complaints data (will be replaced by backend later)
  const complaints = [
    {
      id: 1,
      title: "Water leakage in bathroom",
      category: "Water",
      priority: "High",
      status: "Pending",
      date: "12 Jan 2026",
    },
    {
      id: 2,
      title: "Wi-Fi not working properly",
      category: "Wi-Fi",
      priority: "Medium",
      status: "In Progress",
      date: "10 Jan 2026",
    },
    {
      id: 3,
      title: "Room cleaning issue",
      category: "Cleanliness",
      priority: "Low",
      status: "Resolved",
      date: "08 Jan 2026",
    },
  ];

  return (
    <>
      <Navbar title="My Complaints" />

      <div className="list-page">
        <h2>My Complaints</h2>

        <div className="complaint-list">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="complaint-card"
              onClick={() =>
                navigate(`/student/complaint/${complaint.id}`)
              }
            >
              {/* Top row */}
              <div className="complaint-top">
                <h3>{complaint.title}</h3>

                <span
                  className={`status ${complaint.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {complaint.status}
                </span>
              </div>

              {/* Meta info */}
              <div className="complaint-meta">
                <span>Category: {complaint.category}</span>
                <span>Priority: {complaint.priority}</span>
                <span>Date: {complaint.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyComplaints;