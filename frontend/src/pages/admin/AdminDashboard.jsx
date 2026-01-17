import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/admin/complaints")}>
          View All Complaints
        </button>

        <br /><br />

        <button onClick={() => navigate("/admin/create-user")}>
          Create Staff / Admin
        </button>

        <br /><br />

        <button onClick={() => navigate("/admin/staff-performance")}>
          Staff Performance
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
