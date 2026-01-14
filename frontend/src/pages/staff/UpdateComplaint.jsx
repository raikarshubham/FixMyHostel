import Navbar from "../../components/Navbar";
import "../../styles/form.css";

const UpdateComplaint = () => {
  // Mock assigned complaint
  const complaint = {
    id: 101,
    title: "Water leakage in bathroom",
    hostel: "Boys Hostel A",
    category: "Water",
    priority: "High",
    description:
      "Continuous water leakage from bathroom pipe causing water accumulation.",
  };

  return (
    <>
      <Navbar title="Update Complaint" />

      <div className="form-page">
        <div className="form-card">
          <h2>{complaint.title}</h2>
          <p>
            {complaint.hostel} | {complaint.category} | {complaint.priority}
          </p>

          <div className="detail-section">
            <p>{complaint.description}</p>
          </div>

          <form className="complaint-form">
            <div className="form-group">
              <label>Update Status</label>
              <select>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>

            <div className="form-group">
              <label>Resolution Notes</label>
              <textarea placeholder="Describe the work done..." />
            </div>

            <div className="form-group">
              <label>Upload After-Repair Image (optional)</label>
              <input type="file" />
            </div>

            <button type="submit" className="submit-btn">
              Update Complaint
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateComplaint;
