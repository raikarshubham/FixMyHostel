const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  assignComplaint,
} = require("../controllers/complaintController");

const { protect, authorize } = require("../middleware/authMiddleware");

// 🧑‍🎓 Student routes
router.post("/", protect, authorize("student"), createComplaint);
router.get("/my", protect, authorize("student"), getMyComplaints);

// 🧑‍💼 Admin routes
router.get("/", protect, authorize("admin"), getAllComplaints);
router.put("/:id/assign", protect, authorize("admin"), assignComplaint);

module.exports = router;
