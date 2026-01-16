import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComplaintById } from "../../api/complaintApi";

const ComplaintDetail = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    getComplaintById(id).then((res) => {
      setComplaint(res.data.complaint);
    });
  }, [id]);

  if (!complaint) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>{complaint.title}</h2>
      <p><b>Category:</b> {complaint.category}</p>
      <p><b>Status:</b> {complaint.status}</p>
      <p>{complaint.description}</p>

      <h3>Timeline</h3>
      {complaint.timeline.map((t, i) => (
        <div key={i}>
          <b>{t.status}</b> – {t.note}
        </div>
      ))}
    </div>
  );
};

export default ComplaintDetail;
