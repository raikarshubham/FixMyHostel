import { useNavigate } from "react-router-dom";

const AuthNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="auth-navbar">
      <div className="auth-navbar-left" onClick={() => navigate("/login")}>
        FixMyHostel
      </div>

      <div className="auth-navbar-right">
        A Smart Hostel Complaint & Maintenance Management System
      </div>
    </nav>
  );
};

export default AuthNavbar;
