import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Dashboard</h1>
      <p>Welcome to FixMyHostel</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div className="dashboard-card" onClick={() => navigate("/student/raise-complaint")}>
          <h3>Raise Complaint</h3>
          <p>Report hostel issues</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/student/complaints")}>
          <h3>My Complaints</h3>
          <p>Track your complaints</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/student/feedback")}>
          <h3>Feedback</h3>
          <p>Give feedback on resolved issues</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
