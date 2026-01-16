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

module.exports = router;
