const Complaint = require("../models/Complaint");
const User = require("../models/User");

/* Student: Create Complaint */
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

/* Student: View My Complaints */
exports.getMyComplaints = async (req, res) => {
  const complaints = await Complaint.find({ student: req.user.id })
    .sort({ createdAt: -1 });

  res.json({ success: true, complaints });
};

/* Student / Staff / Admin: View Single Complaint */
exports.getComplaintById = async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);

  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  if (
    req.user.role === "student" &&
    complaint.student.toString() !== req.user.id
  ) {
    return res.status(403).json({ message: "Not authorized" });
  }

  res.json({ success: true, complaint });
};

/* Admin: View All Complaints */
exports.getAllComplaints = async (req, res) => {
  const complaints = await Complaint.find()
    .populate("student", "name email")
    .populate("assignedStaff", "name email");

  res.json({ success: true, complaints });
};

/* Admin: Assign Complaint */
exports.assignComplaint = async (req, res) => {
  const { staffId } = req.body;

  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) return res.status(404).json({ message: "Complaint not found" });

  complaint.assignedStaff = staffId;
  complaint.status = "Assigned";
  complaint.timeline.push({
    status: "Assigned",
    updatedBy: req.user.id,
    role: "admin",
    note: "Assigned to staff",
  });

  await complaint.save();
  res.json({ success: true, complaint });
};

/* Staff/Admin: Update Status */
exports.updateComplaintStatus = async (req, res) => {
  const { status, note } = req.body;

  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) return res.status(404).json({ message: "Complaint not found" });

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
