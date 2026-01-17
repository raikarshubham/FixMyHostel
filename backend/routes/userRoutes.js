const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { protect, authorize } = require("../middleware/authMiddleware");

/* ===============================
   Admin: Create Staff / Admin
================================ */
router.post(
  "/create",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (!["staff", "admin"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const user = await User.create({
        name,
        email,
        password,
        role,
      });

      res.status(201).json({
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("CREATE USER ERROR:", error);
      res.status(500).json({ message: "User creation failed" });
    }
  }
);

/* ===============================
   Admin: Get ALL Users (Students + Staff + Admin)
================================ */
router.get(
  "/",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const users = await User.find().select("_id name email role");

      res.json({
        success: true,
        users,
      });
    } catch (error) {
      console.error("FETCH USERS ERROR:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  }
);

// Admin: Get Only Staff + Admin
router.get(
  "/staff",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const users = await User.find({
        role: { $in: ["staff", "admin"] },
      }).select("_id name email role");

      res.json({
        success: true,
        users,
      });
    } catch (error) {
      console.error("FETCH STAFF ERROR:", error);
      res.status(500).json({ message: "Failed to fetch staff" });
    }
  }
);

/* ===============================
   Admin: Get Only Students (NEW)
================================ */
router.get(
  "/students",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const students = await User.find({ role: "student" }).select(
        "_id name email role"
      );

      res.json({
        success: true,
        users: students,
      });
    } catch (error) {
      console.error("FETCH STUDENTS ERROR:", error);
      res.status(500).json({ message: "Failed to fetch students" });
    }
  }
);

/* ===============================
   Admin: Delete ANY User (Except Self)
================================ */
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // ❌ Prevent admin from deleting self
      if (user._id.toString() === req.user.id) {
        return res.status(400).json({
          message: "You cannot delete your own account",
        });
      }

      await user.deleteOne();

      res.json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error("DELETE USER ERROR:", error);
      res.status(500).json({ message: "Failed to delete user" });
    }
  }
);

module.exports = router;
