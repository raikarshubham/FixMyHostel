import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/dashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Student Dashboard" />

      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1>Student Dashboard</h1>
          <p>Welcome to FixMyHostel</p>
        </header>

        <div className="dashboard-grid">
          <div
            className="dashboard-card"
            onClick={() => navigate("/student/raise-complaint")}
          >
            <h3>Raise Complaint</h3>
            <p>Report hostel-related issues</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/student/my-complaints")}
          >
            <h3>My Complaints</h3>
            <p>Track your submitted complaints</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/student/feedback")}
          >
            <h3>Feedback</h3>
            <p>Rate resolved complaints</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
