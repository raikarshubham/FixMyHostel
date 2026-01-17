const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  status: String,
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  role: String,
  note: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const complaintSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,

    status: {
      type: String,
      default: "Pending",
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    timeline: [timelineSchema],

    /* ===============================
       FEEDBACK (NEW)
    ================================ */
    feedback: {
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      comment: String,
      submittedAt: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
