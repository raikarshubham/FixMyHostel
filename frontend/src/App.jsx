
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

/* Auth */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* Dashboards */
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";

/* Student Pages */
import RaiseComplaint from "./pages/student/RaiseComplaint";
import MyComplaints from "./pages/student/MyComplaints";
import ComplaintStatus from "./pages/student/ComplaintStatus";
import ComplaintDetail from "./pages/student/ComplaintDetail";
import Feedback from "./pages/student/Feedback";

/* Admin Pages */
import AssignComplaint from "./pages/admin/AssignComplaint";
import AllComplaints from "./pages/admin/AllComplaints";
import StaffPerformance from "./pages/admin/StaffPerformance";
import CreateUser from "./pages/admin/CreateUser";

/* Staff Pages */
import UpdateComplaint from "./pages/staff/UpdateComplaint";
import ResolvedComplaints from "./pages/staff/ResolvedComplaints";

const App = () => {
  return (
    <div className="fmh-app">
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/raise-complaint"
          element={
            <ProtectedRoute role="student">
              <RaiseComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/complaints"
          element={
            <ProtectedRoute role="student">
              <MyComplaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/complaints/:id"
          element={
            <ProtectedRoute role="student">
              <ComplaintDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/status"
          element={
            <ProtectedRoute role="student">
              <ComplaintStatus />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/feedback"
          element={
            <ProtectedRoute role="student">
              <Feedback />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/complaints"
          element={
            <ProtectedRoute role="admin">
              <AllComplaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/assign/:id"
          element={
            <ProtectedRoute role="admin">
              <AssignComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/staff-performance"
          element={
            <ProtectedRoute role="admin">
              <StaffPerformance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/create-user"
          element={
            <ProtectedRoute role="admin">
              <CreateUser />
            </ProtectedRoute>
          }
        />

        {/* Staff Routes */}
        <Route
          path="/staff/dashboard"
          element={
            <ProtectedRoute role="staff">
              <StaffDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/update/:id"
          element={
            <ProtectedRoute role="staff">
              <UpdateComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/resolved"
          element={
            <ProtectedRoute role="staff">
              <ResolvedComplaints />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
