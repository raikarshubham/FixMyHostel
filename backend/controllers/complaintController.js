const Complaint = require("../models/Complaint");

// 📝 Student raises a complaint
exports.createComplaint = async (req, res) => {
  try {
    const {
      hostel,
      block,
      roomNumber,
      title,
      description,
      category,
      priority,
    } = req.body;

    const complaint = await Complaint.create({
      student: req.user._id,
      hostel,
      block,
      roomNumber,
      title,
      description,
      category,
      priority,
    });

    res.status(201).json({
      message: "Complaint raised successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📋 Student: view own complaints
exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      student: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📋 Admin: view all complaints + populate user info
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("student", "name email")
      .populate("assignedTo", "name email")
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🧑‍💼 Admin assigns complaint to staff
exports.assignComplaint = async (req, res) => {
  try {
    const { staffId } = req.body;

    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.assignedTo = staffId;
    complaint.status = "Assigned";
    await complaint.save();

    res.json({
      message: "Complaint assigned successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

