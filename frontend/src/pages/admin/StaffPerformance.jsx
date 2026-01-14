import Navbar from "../../components/Navbar";
import "../../styles/admin.css";

const StaffPerformance = () => {
  // Mock staff performance data
  const staffStats = [
    {
      id: 1,
      name: "Ramesh Kumar",
      totalComplaints: 12,
      avgRating: 4.5,
    },
    {
      id: 2,
      name: "Suresh Patil",
      totalComplaints: 9,
      avgRating: 3.8,
    },
    {
      id: 3,
      name: "Amit Sharma",
      totalComplaints: 15,
      avgRating: 4.2,
    },
  ];

  // Mock feedback data
  const feedbacks = [
    {
      id: 1,
      complaint: "Water leakage issue",
      staff: "Ramesh Kumar",
      rating: 5,
      comment: "Issue resolved quickly and professionally.",
    },
    {
      id: 2,
      complaint: "Wi-Fi not working",
      staff: "Suresh Patil",
      rating: 3,
      comment: "Took more time than expected.",
    },
    {
      id: 3,
      complaint: "Room cleaning issue",
      staff: "Amit Sharma",
      rating: 4,
      comment: "Good work, room is clean now.",
    },
  ];

  return (
    <>
      <Navbar title="Staff Performance & Feedback" />

      <div className="admin-page">
        {/* ================= STAFF STATS ================= */}
        <div className="analytics-section">
          {staffStats.map((staff) => (
            <div className="stat-card" key={staff.id}>
              <h3>{staff.name}</h3>
              <p>{staff.avgRating} ⭐</p>
              <span className="stat-sub">
                Complaints handled: {staff.totalComplaints}
              </span>
            </div>
          ))}
        </div>

        {/* ================= FEEDBACK TABLE ================= */}
        <div className="complaints-table">
          <h2>Student Feedback</h2>

          <table>
            <thead>
              <tr>
                <th>Complaint</th>
                <th>Staff</th>
                <th>Rating</th>
                <th>Comment</th>
              </tr>
            </thead>

            <tbody>
              {feedbacks.map((fb) => (
                <tr key={fb.id}>
                  <td>{fb.complaint}</td>
                  <td>{fb.staff}</td>
                  <td>{fb.rating} ⭐</td>
                  <td>{fb.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffPerformance;
