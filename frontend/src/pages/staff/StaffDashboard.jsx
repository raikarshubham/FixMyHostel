import Navbar from "../../components/Navbar";
import "../../styles/dashboard.css";

const StaffDashboard = () => {
  return (
    <>
      <Navbar title="Maintenance Dashboard" />

      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1>Maintenance Dashboard</h1>
          <p>Resolve assigned hostel complaints</p>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Assigned Complaints</h3>
            <p>View complaints assigned to you</p>
          </div>

          <div className="dashboard-card">
            <h3>Update Status</h3>
            <p>Mark complaints as in-progress or resolved</p>
          </div>

          <div className="dashboard-card">
            <h3>Upload Proof</h3>
            <p>Add images after fixing issues</p>
          </div>

          <div className="dashboard-card">
            <h3>Resolution History</h3>
            <p>View previously resolved complaints</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
