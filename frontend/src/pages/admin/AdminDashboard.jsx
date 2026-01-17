import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <h1>Admin Dashboard</h1>
        <p className="dashboard-subtext">
          Manage complaints, staff, and performance
        </p>

        <div className="dashboard-grid">
          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/complaints")}
          >
            <h3>View All Complaints</h3>
            <p>View, assign, and manage all complaints</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/create-user")}
          >
            <h3>Create Staff / Admin</h3>
            <p>Add new staff members or administrators</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/manage-users")}
          >
            <h3>Manage Users</h3>
            <p>View / Delete staff members</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/admin/staff-performance")}
          >
            <h3>Staff Performance</h3>
            <p>View staff ratings and feedback</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
