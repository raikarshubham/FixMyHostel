import Navbar from "../../components/Navbar";
import "../../styles/form.css";

const Feedback = () => {
  return (
    <>
      <Navbar title="Feedback" />

      <div className="form-page">
        <div className="form-card">
          <h2>Complaint Feedback</h2>
          <p>Please rate your experience after issue resolution</p>

          <form className="complaint-form">
            <div className="form-group">
              <label>Complaint ID</label>
              <input type="text" value="CMP-1023" disabled />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <select>
                <option value="">Select rating</option>
                <option>⭐ 1 - Very Poor</option>
                <option>⭐⭐ 2 - Poor</option>
                <option>⭐⭐⭐ 3 - Average</option>
                <option>⭐⭐⭐⭐ 4 - Good</option>
                <option>⭐⭐⭐⭐⭐ 5 - Excellent</option>
              </select>
            </div>

            <div className="form-group">
              <label>Comments (optional)</label>
              <textarea placeholder="Share your experience..." />
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
