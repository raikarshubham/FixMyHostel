import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");

  // ❌ Not logged in
  if (!token || !userData) {
    return <Navigate to="/login" replace />;
  }

  let user;
  try {
    user = JSON.parse(userData);
  } catch (err) {
    console.error("Invalid user data in storage");
    return <Navigate to="/login" replace />;
  }

  // 🔒 Normalize role
  const userRole = user.role?.toLowerCase();

  // ❌ Role mismatch
  if (role && userRole !== role.toLowerCase()) {
    console.warn("Role mismatch:", userRole, "required:", role);
    return <Navigate to="/login" replace />;
  }

  // ✅ Access granted
  return children;
};

export default ProtectedRoute;
