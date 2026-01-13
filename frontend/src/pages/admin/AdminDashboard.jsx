import Navbar from "../../components/Navbar";
import "../../styles/dashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <Navbar title="Admin Dashboard" />

      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage complaints and maintenance staff</p>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>All Complaints</h3>
            <p>View and manage all complaints</p>
          </div>

          <div className="dashboard-card">
            <h3>Assign Complaints</h3>
            <p>Assign issues to maintenance staff</p>
          </div>

          <div className="dashboard-card">
            <h3>Analytics</h3>
            <p>View complaint statistics</p>
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
