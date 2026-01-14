import Navbar from "../../components/Navbar";
import "../../styles/list.css";

const ResolvedComplaints = () => {
  // Mock resolved complaints
  const resolvedComplaints = [
    {
      id: 201,
      title: "Water leakage in bathroom",
      hostel: "Boys Hostel A",
      category: "Water",
      resolvedDate: "14 Jan 2026",
      notes: "Pipe replaced and leakage fixed.",
    },
    {
      id: 202,
      title: "Wi-Fi connectivity issue",
      hostel: "Girls Hostel B",
      category: "Wi-Fi",
      resolvedDate: "13 Jan 2026",
      notes: "Router restarted and signal optimized.",
    },
  ];

  return (
    <>
      <Navbar title="Resolved Complaints" />

      <div className="list-page">
        <h2>Resolution History</h2>

        <div className="complaint-list">
          {resolvedComplaints.map((c) => (
            <div className="complaint-card" key={c.id}>
              <div className="complaint-top">
                <h3>{c.title}</h3>
                <span className="status resolved">Resolved</span>
              </div>

              <div className="complaint-meta">
                <span>Hostel: {c.hostel}</span>
                <span>Category: {c.category}</span>
                <span>Resolved on: {c.resolvedDate}</span>
              </div>

              <p style={{ marginTop: "10px", color: "#c7c9d3" }}>
                <strong>Resolution:</strong> {c.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResolvedComplaints;
