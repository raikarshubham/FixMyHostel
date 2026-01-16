const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

/* ===============================
   MIDDLEWARE (🔥 VERY IMPORTANT)
================================ */
app.use(cors());
app.use(express.json()); // 🔥 THIS WAS MISSING
app.use(express.urlencoded({ extended: true }));

/* ===============================
   ROUTES
================================ */
const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/users", userRoutes);

/* ===============================
   DATABASE
================================ */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
