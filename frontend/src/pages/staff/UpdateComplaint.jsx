import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "../../styles/theme.css";
import "../../styles/layout.css";
import "../../styles/updateComplaint.css";

const UpdateComplaint = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/complaints/${id}`)
      .then((res) => setComplaint(res.data.complaint))
      .catch(console.error);
  }, [id]);

  const updateStatus = async () => {
    try {
      setLoading(true);
      await api.put(`/complaints/${id}/status`, { status, note });
      navigate("/staff/dashboard");
    } catch (err) {
      console.error("Failed to update status", err);
    } finally {
      setLoading(false);
    }
  };

  if (!complaint) {
    return (
      <>
        <Navbar />
        <p className="loading-text">Loading complaint...</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="update-page">
        <div className="update-card">
          <h1>{complaint.title}</h1>

          <p className="complaint-description">
            {complaint.description}
          </p>

          <div className="complaint-meta">
            <span><strong>Category:</strong> {complaint.category}</span>
            <span><strong>Status:</strong> {complaint.status}</span>
          </div>

          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

          <label>Work Note</label>
          <textarea
            placeholder="Describe work done"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button onClick={updateStatus} disabled={loading}>
            {loading ? "Updating..." : "Update Status"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UpdateComplaint;
