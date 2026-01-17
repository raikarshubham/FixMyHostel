const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  getComplaintById,
  assignComplaint,
  updateComplaintStatus,
  submitFeedback,
} = require("../controllers/complaintController");

const { protect, authorize } = require("../middleware/authMiddleware");

/* Student */
router.post("/", protect, authorize("student"), createComplaint);
router.get("/my", protect, authorize("student"), getMyComplaints);
router.post(
  "/:id/feedback",
  protect,
  authorize("student"),
  submitFeedback
);

/* Staff */
router.get(
  "/assigned",
  protect,
  authorize("staff"),
  async (req, res) => {
    const complaints = await require("../models/Complaint")
      .find({ assignedStaff: req.user.id })
      .sort({ createdAt: -1 });

    res.json({ success: true, complaints });
  }
);

/* Shared */
router.get("/:id", protect, authorize("student", "staff", "admin"), getComplaintById);

/* Admin */
router.get("/", protect, authorize("admin"), getAllComplaints);
router.put("/:id/assign", protect, authorize("admin"), assignComplaint);

/* Staff + Admin */
router.put("/:id/status", protect, authorize("staff", "admin"), updateComplaintStatus);

module.exports = router;
