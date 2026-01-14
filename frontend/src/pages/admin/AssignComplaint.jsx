import Navbar from "../../components/Navbar";
import "../../styles/form.css";

const AssignComplaint = () => {
  // Mock complaint data
  const complaint = {
    id: 1,
    title: "Water leakage in bathroom",
    category: "Water",
    priority: "High",
    status: "Pending",
    date: "12 Jan 2026",
    description:
      "Continuous water leakage from bathroom pipe causing water accumulation.",
  };

  // Mock maintenance staff list
  const staffList = [
    { id: 1, name: "Ramesh Kumar" },
    { id: 2, name: "Suresh Patil" },
    { id: 3, name: "Amit Sharma" },
  ];

  return (
    <>
      <Navbar title="Assign Complaint" />

      <div className="form-page">
        <div className="form-card">
          <h2>{complaint.title}</h2>
          <p>
            {complaint.category} | {complaint.priority} Priority
          </p>

          <div className="detail-section">
            <p>{complaint.description}</p>
          </div>

          <form className="complaint-form">
            <div className="form-group">
              <label>Assign to Maintenance Staff</label>
              <select>
                <option value="">Select staff member</option>
                {staffList.map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Admin Remarks (optional)</label>
              <textarea placeholder="Instructions or notes for staff..." />
            </div>

            <button type="submit" className="submit-btn">
              Assign Complaint
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignComplaint;
