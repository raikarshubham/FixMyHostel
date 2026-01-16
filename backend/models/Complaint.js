const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Pending", "Assigned", "In Progress", "Resolved", "Closed"],
    required: true,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  role: {
    type: String,
    enum: ["student", "staff", "admin"],
  },
  note: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["Pending", "Assigned", "In Progress", "Resolved", "Closed"],
      default: "Pending",
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    timeline: [timelineSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
