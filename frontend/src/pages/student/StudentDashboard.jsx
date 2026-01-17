import { useNavigate } from "react-router-dom";
import "../../styles/theme.css";
import "../../styles/dashboard.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/layout.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="dashboard-page">
      <h1>Student Dashboard</h1>
      <p className="dashboard-subtext">Welcome to FixMyHostel</p>

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
          onClick={() => navigate("/student/complaints")}
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
    <Footer />
    </>
  );
};

export default StudentDashboard;
