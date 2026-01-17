const Complaint = require("../models/Complaint");

/* ===============================
   Student: Create Complaint
================================ */
exports.createComplaint = async (req, res) => {
  const { title, description, category, priority } = req.body;

  const complaint = await Complaint.create({
    title,
    description,
    category,
    priority,
    student: req.user.id,
    status: "Pending",
    timeline: [
      {
        status: "Pending",
        updatedBy: req.user.id,
        role: "student",
        note: "Complaint raised",
      },
    ],
  });

  res.status(201).json({ success: true, complaint });
};

/* ===============================
   Student: My Complaints
================================ */
exports.getMyComplaints = async (req, res) => {
  const complaints = await Complaint.find({ student: req.user.id })
    .populate("assignedStaff", "name email")
    .sort({ createdAt: -1 });

  res.json({ success: true, complaints });
};

/* ===============================
   Get Single Complaint
================================ */
exports.getComplaintById = async (req, res) => {
  const complaint = await Complaint.findById(req.params.id)
    .populate("assignedStaff", "name email")
    .populate("student", "name email");

  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  if (
    req.user.role === "student" &&
    complaint.student._id.toString() !== req.user.id
  ) {
    return res.status(403).json({ message: "Not authorized" });
  }

  res.json({ success: true, complaint });
};

/* ===============================
   Admin: All Complaints
================================ */
exports.getAllComplaints = async (req, res) => {
  const complaints = await Complaint.find()
    .populate("student", "name email")
    .populate("assignedStaff", "name email");

  res.json({ success: true, complaints });
};

/* ===============================
   Admin: Assign Complaint
================================ */
exports.assignComplaint = async (req, res) => {
  const { staffId } = req.body;

  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  complaint.assignedStaff = staffId;
  complaint.status = "Assigned";

  complaint.timeline.push({
    status: "Assigned",
    updatedBy: req.user.id,
    role: "admin",
    note: "Complaint assigned to staff",
  });

  await complaint.save();

  res.json({ success: true, complaint });
};

/* ===============================
   Staff/Admin: Update Status
================================ */
exports.updateComplaintStatus = async (req, res) => {
  const { status, note } = req.body;

  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  if (
    req.user.role === "staff" &&
    complaint.assignedStaff?.toString() !== req.user.id
  ) {
    return res.status(403).json({ message: "Not authorized" });
  }

  complaint.status = status;

  complaint.timeline.push({
    status,
    updatedBy: req.user.id,
    role: req.user.role,
    note,
  });

  await complaint.save();

  res.json({ success: true, complaint });
};

/* ===============================
   Staff: Assigned Complaints
================================ */
exports.getAssignedComplaints = async (req, res) => {
  const complaints = await Complaint.find({
    assignedStaff: req.user.id,
  })
    .populate("student", "name email")
    .sort({ createdAt: -1 });

  res.json({ success: true, complaints });
};

/* ===============================
   Staff: Resolved Complaints
================================ */
exports.getResolvedComplaints = async (req, res) => {
  const complaints = await Complaint.find({
    assignedStaff: req.user.id,
    status: "Resolved",
  })
    .populate("student", "name email")
    .sort({ updatedAt: -1 });

  res.json({ success: true, complaints });
};

/* ===============================
   Student: Submit Feedback
================================ */
exports.submitFeedback = async (req, res) => {
  const { rating, comment } = req.body;

  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  if (complaint.student.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  if (complaint.status !== "Resolved") {
    return res.status(400).json({
      message: "Feedback allowed only for resolved complaints",
    });
  }

  if (complaint.feedback?.rating) {
    return res.status(400).json({
      message: "Feedback already submitted",
    });
  }

  complaint.feedback = {
    rating,
    comment,
    submittedAt: new Date(),
  };

  await complaint.save();

  res.json({ success: true, message: "Feedback submitted" });
};
