import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

const UpdateComplaint = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [note, setNote] = useState("");

  useEffect(() => {
    api.get(`/complaints/${id}`)
      .then((res) => setComplaint(res.data.complaint))
      .catch(console.error);
  }, [id]);

  const updateStatus = async () => {
    await api.put(`/complaints/${id}/status`, {
      status,
      note,
    });

    navigate("/staff/dashboard");
  };

  if (!complaint) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>{complaint.title}</h2>
      <p>{complaint.description}</p>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      <textarea
        placeholder="Add work note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={updateStatus}>Update Status</button>
    </div>
  );
};

export default UpdateComplaint;
