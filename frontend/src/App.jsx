import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";

import RaiseComplaint from "./pages/student/RaiseComplaint";
import MyComplaints from "./pages/student/MyComplaints";
import ComplaintStatus from "./pages/student/ComplaintStatus";
import Feedback from "./pages/student/Feedback";
import ComplaintDetail from "./pages/student/ComplaintDetail";
import AssignComplaint from "./pages/admin/AssignComplaint";
import AllComplaints from "./pages/admin/AllComplaints";
import StaffPerformance from "./pages/admin/StaffPerformance";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff"
          element={
            <ProtectedRoute role="staff">
              <StaffDashboard />
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
  path="/student/my-complaints"
  element={
    <ProtectedRoute role="student">
      <MyComplaints />
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

<Route
  path="/student/complaint/:id"
  element={
    <ProtectedRoute role="student">
      <ComplaintDetail />
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
  path="/admin/complaints"
  element={
    <ProtectedRoute role="admin">
      <AllComplaints />
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


        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
