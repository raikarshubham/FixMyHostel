import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { getAllStaff } from "../../api/userApi";

const AssignComplaint = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [staffId, setStaffId] = useState("");

  useEffect(() => {
    api.get(`/complaints/${id}`)
      .then((res) => setComplaint(res.data.complaint));

    getAllStaff()
      .then((res) => setStaffList(res.data.users))
      .catch(console.error);
  }, [id]);

  const assign = async () => {
    if (!staffId) return alert("Select staff");

    await api.put(`/complaints/${id}/assign`, { staffId });
    navigate("/admin/complaints");
  };

  if (!complaint) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Assign Complaint</h2>

      <h4>{complaint.title}</h4>
      <p>{complaint.description}</p>

      <select
        value={staffId}
        onChange={(e) => setStaffId(e.target.value)}
      >
        <option value="">Select Staff</option>
        {staffList.map((s) => (
          <option key={s._id} value={s._id}>
            {s.name} ({s.email})
          </option>
        ))}
      </select>

      <br /><br />
      <button onClick={assign}>Assign</button>
    </div>
  );
};

export default AssignComplaint;
