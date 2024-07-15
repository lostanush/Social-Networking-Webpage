import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//middleware
import { requireSignin } from "../middleware/auth.js";
//Controllers
import { createPost, uploadImage } from "../components/post.js";

router.post("/create-post", requireSignin, createPost);
router.post(
  "/upload-image",
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);
// router.get("/user-posts", requireSignin, postByUser);

export default router;
