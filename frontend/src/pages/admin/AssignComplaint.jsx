import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/assignComplaint.css";

const AssignComplaint = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [staffId, setStaffId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch complaint
    api.get(`/complaints/${id}`)
      .then((res) => setComplaint(res.data.complaint))
      .catch(() => setError("Failed to load complaint"));

    // Fetch ONLY staff (backend enforced + frontend safe)
    api.get("/users/staff")
      .then((res) => {
        const onlyStaff = res.data.users.filter(
          (u) => u.role === "staff"
        );
        setStaffList(onlyStaff);
      })
      .catch(() => setError("Failed to load staff list"));
  }, [id]);

  const assignComplaint = async () => {
    if (!staffId) {
      setError("Please select a staff member");
      return;
    }

    try {
      await api.put(`/complaints/${id}/assign`, { staffId });
      navigate("/admin/complaints");
    } catch {
      setError("Assignment failed");
    }
  };

  if (!complaint) {
    return <p className="loading-text">Loading complaint...</p>;
  }

  return (
    <>
      <Navbar />

      <div className="assign-page">
        <div className="assign-card">
          <h1>Assign Complaint</h1>

          {error && <p className="error-text">{error}</p>}

          <div className="complaint-info">
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
          </div>

          <div className="form-group">
            <label>Select Staff</label>
            <select
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
            >
              <option value="">Select staff member</option>
              {staffList.map((staff) => (
                <option key={staff._id} value={staff._id}>
                  {staff.name} ({staff.email})
                </option>
              ))}
            </select>
          </div>

          <button className="primary-btn" onClick={assignComplaint}>
            Assign Complaint
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AssignComplaint;
