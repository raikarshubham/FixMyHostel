const complaintRoutes = require("./routes/complaintRoutes");
const { protect, authorize } = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("FixMyHostel backend is running");
});

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You have accessed a protected route",
    user: req.user,
  });
});

app.get(
  "/api/admin-only",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

app.use("/api/complaints", complaintRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
