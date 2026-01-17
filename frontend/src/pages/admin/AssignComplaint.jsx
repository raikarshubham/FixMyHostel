import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

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

    // Fetch staff list (🔥 FIX)
    api.get("/users/staff")
      .then((res) => setStaffList(res.data.users))
      .catch(() => setError("Failed to load staff"));
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

  if (!complaint) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Assign Complaint</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h4>{complaint.title}</h4>
      <p>{complaint.description}</p>

      <select
        value={staffId}
        onChange={(e) => setStaffId(e.target.value)}
      >
        <option value="">Select Staff</option>
        {staffList.map((staff) => (
          <option key={staff._id} value={staff._id}>
            {staff.name} ({staff.email})
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={assignComplaint}>Assign</button>
    </div>
  );
};

export default AssignComplaint;
