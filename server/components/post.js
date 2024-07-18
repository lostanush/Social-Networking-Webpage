import Post from "../models/post.js";
import cloudinary from "cloudinary";
import formidable from "express-formidable";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//Saving Post to MongoDB:
export const createPost = async (req, res) => {
  // console.log("Post : ", req.body);
  const { content, image } = req.body;
  if (!content || !content.length) {
    return res.json({
      error: "Content is empty",
    });
  }
  try {
    const post = new Post({ content, image, postedBy: req.auth._id });
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

//Saving Images to Cloudinary:
export const uploadImage = async (req, res) => {
  try {
    // console.log("req files : ", req.files.image.path);
    const result = await cloudinary.uploader.upload(req.files.image.path);
    console.log("Uploaded image URL:", result.secure_url); // Log the image URL
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res
      .json({
        error: "Failed, Try again",
      })
      .status(400);
  }
};

export const postByUser = async (req, res) => {
  try {
    // console.log(req.auth._id);
    // const posts = await Post.find({ postBy: req.auth._id })
    const posts = await Post.find({})
      .populate("postedBy", "_id name image")
      .sort({ createdAt: -1 })
      .limit(10);
    // console.log(posts);
    // // console.log("hello ", req.body);
    res.json(posts);
  } catch (err) {
    console.log("error: ", err);
    res.json({
      error: "Please refresh",
    });
  }
};
