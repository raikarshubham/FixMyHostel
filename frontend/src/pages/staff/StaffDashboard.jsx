import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/dashboard.css";

const StaffDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Staff Dashboard" />

      <div className="dashboard-page">
        <header className="dashboard-header">
          <h1>Maintenance Staff Dashboard</h1>
          <p>View and update assigned complaints</p>
        </header>

        <div className="dashboard-grid">
         <div className="dashboard-card"onClick={() => navigate("/staff/update/101")}>
          <h3>Assigned Complaints</h3>
           <p>Update complaint status and resolution</p>
         </div>

         <div className="dashboard-card" onClick={() => navigate("/staff/resolved")}>
          <h3>Resolved Complaints</h3>
           <p>View resolution history</p>
         </div>
        </div>

      </div>
    </>
  );
};

export default StaffDashboard;
