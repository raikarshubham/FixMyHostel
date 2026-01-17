import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goHome = () => {
    if (!user) return;

    const role = user.role.toLowerCase();

    if (role === "student") navigate("/student/dashboard");
    else if (role === "staff") navigate("/staff/dashboard");
    else if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={goHome}>
        FixMyHostel
      </div>

      <div className="navbar-right">
        <div className="navbar-profile">
          <span className="navbar-name">{user?.email}</span>
          <span className="navbar-role">{user?.role}</span>
        </div>

        <button className="navbar-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
