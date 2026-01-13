import Navbar from "../../components/Navbar";
import "../../styles/form.css";

const RaiseComplaint = () => {
  return (
    <>
      <Navbar title="Raise Complaint" />

      <div className="form-page">
        <div className="form-card">
          <h2>Raise a Complaint</h2>
          <p>Please provide details about the issue</p>

          <form className="complaint-form">
            <div className="form-group">
              <label>Hostel Name</label>
              <input type="text" placeholder="Eg. Boys Hostel A" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Block</label>
                <input type="text" placeholder="Eg. Block B" />
              </div>

              <div className="form-group">
                <label>Room Number</label>
                <input type="text" placeholder="Eg. 203" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select>
                  <option>Water</option>
                  <option>Electricity</option>
                  <option>Wi-Fi</option>
                  <option>Cleanliness</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Priority</label>
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Complaint Title</label>
              <input type="text" placeholder="Short issue title" />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Describe the issue in detail..." />
            </div>

            <div className="form-group">
              <label>Upload Image (optional)</label>
              <input type="file" />
            </div>

            <button type="submit" className="submit-btn">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RaiseComplaint;
