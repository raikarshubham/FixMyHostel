import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>

      <button onClick={() => navigate("/admin/complaints")}>
        View All Complaints
      </button>

      <button onClick={() => navigate("/admin/staff-performance")}>
        Staff Performance
      </button>
    </div>
  );
};

export default AdminDashboard;
