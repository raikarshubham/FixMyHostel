import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login
    const mockUser = {
      id: "1",
      name: "Test User",
      email,
      role,
    };

    login({ user: mockUser });
    navigate(`/${role}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">FixMyHostel</h1>
        <p className="auth-subtitle">
          Hostel Complaint & Maintenance System
        </p>

        <div className="auth-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="student@hostel.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Login as</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="staff">Maintenance Staff</option>
          </select>

          <button onClick={handleLogin} className="auth-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
