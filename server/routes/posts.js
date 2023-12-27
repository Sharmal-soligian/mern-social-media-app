import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

/* GET routes */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE routes */
router.put("/:id/like", verifyToken, likePost);

export default router;