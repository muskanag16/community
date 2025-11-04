// import express from "express";
// import multer from "multer";
// import Post from "../models/Post.js";
// import protect from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Image upload for post
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // Create post
// router.post("/", protect, upload.single("image"), async (req, res) => {
//   try {
//     const post = await Post.create({
//       user: req.user._id,
//       text: req.body.text,
//       image: req.file ? req.file.path : "",
//     });
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all posts

// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user", "name profileImage") // 👈 includes user name + image
//       .sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default router;
import express from "express";
import multer from "multer";
import Post from "../models/Post.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Configure image upload for posts
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ✅ Create post (with populated user data)
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user._id,
      text: req.body.text,
      image: req.file ? req.file.path : "",
    });

    // ✅ Populate the user data (name + profileImage)
    const populatedPost = await post.populate("user", "name profileImage");
    res.json(populatedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get all posts (includes user info)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name profileImage") // Includes name & profile image
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/my-posts", protect, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user._id })
      .populate("user", "name profileImage")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get posts from other users (Feed)
router.get("/feed", protect, async (req, res) => {
  try {
    const posts = await Post.find({ user: { $ne: req.user._id } }) // not my posts
      .populate("user", "name profileImage")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// ✅ Delete a post
router.delete("/:id", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post not found" });

    // ✅ Use `user` instead of `author`
    if (post.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Not authorized to delete this post" });
    }

    await post.deleteOne();
    res.json({
      success: true,
      message: "Post deleted successfully",
      id: req.params.id,
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error deleting post" });
  }
});
// ✅ Like / Unlike post
router.post("/:id/like", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post not found" });

    const userId = req.user._id.toString();
    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      post.likes = post.likes.filter((id) => id.toString() !== userId);
    } else {
      // Like
      post.likes.push(userId);
    }

    await post.save();

    // Populate user info before sending back
    const populatedPost = await post.populate("user", "name profileImage");
    res.json(populatedPost);
  } catch (err) {
    console.error("Like error:", err);
    res.status(500).json({ error: "Server error toggling like" });
  }
});


export default router;
