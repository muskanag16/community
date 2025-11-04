import express from "express";
import User from "../models/User.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ✅ GET current user profile
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarUrl: user.profileImage
        ? `http://localhost:5000/${user.profileImage}`
        : null,
    });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ PUT /api/users/me → Update name + avatar
router.put("/me", protect, upload.single("avatar"), async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update fields
    if (req.body.name) user.name = req.body.name;
    if (req.file) user.profileImage = req.file.path;

    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarUrl: user.profileImage
        ? `http://localhost:5000/${user.profileImage}`
        : null,
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
