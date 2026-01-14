import { useState } from "react";
import Navbar from "../../components/Navbar";
import TimelineModal from "../../components/TimelineModal";
import "../../styles/admin.css";
import { useNavigate } from "react-router-dom";

const AllComplaints = () => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
    const navigate = useNavigate();
  // Mock complaints data
  const complaints = [
    {
      id: 1,
      title: "Water leakage in bathroom",
      category: "Water",
      priority: "High",
      status: "Pending",
      hostel: "Boys Hostel A",
      date: "12 Jan 2026",
    },
    {
      id: 2,
      title: "Wi-Fi not working",
      category: "Wi-Fi",
      priority: "Medium",
      status: "In Progress",
      hostel: "Girls Hostel B",
      date: "11 Jan 2026",
    },
    {
      id: 3,
      title: "Room cleaning issue",
      category: "Cleanliness",
      priority: "Low",
      status: "Resolved",
      hostel: "Boys Hostel C",
      date: "10 Jan 2026",
    },
  ];

  return (
    <>

      <Navbar title="All Complaints" />

      <div className="admin-page">
        {/* ================= ANALYTICS ================= */}
        <div className="analytics-section">
          <div className="stat-card">
            <h3>Total Complaints</h3>
            <p>{complaints.length}</p>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <p>{complaints.filter(c => c.status === "Pending").length}</p>
          </div>

          <div className="stat-card">
            <h3>In Progress</h3>
            <p>{complaints.filter(c => c.status === "In Progress").length}</p>
          </div>

          <div className="stat-card">
            <h3>Resolved</h3>
            <p>{complaints.filter(c => c.status === "Resolved").length}</p>
          </div>
        </div>

        {/* ================= COMPLAINTS TABLE ================= */}
        <div className="complaints-table">
          <h2>Complaints</h2>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Hostel</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((c) => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.hostel}</td>
                  <td>{c.category}</td>
                  <td>{c.priority}</td>
                  <td>
                    <span
                      className={`status ${c.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td>{c.date}</td>

                  <td className="action-cell">
                  <button className="assign-btn" onClick={() => navigate(`/admin/assign/${c.id}`)}>
                  Assign Staff
                  </button>

                  <button className="timeline-btn"onClick={() => setSelectedComplaint(c)}>
                  Timeline
                  </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= TIMELINE MODAL ================= */}
      <TimelineModal
        complaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </>
  );
};

export default AllComplaints;
