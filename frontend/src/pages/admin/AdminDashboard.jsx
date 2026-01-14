import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Admin Dashboard" />

      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage complaints and maintenance staff</p>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card" onClick={() => navigate("/admin/complaints")}>
           <h3>All Complaints</h3>
            <p>View, analyze & assign complaints</p>
          </div>

          <div className="dashboard-card">
            <h3>Staff Performance</h3>
            <p>Track maintenance efficiency</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
