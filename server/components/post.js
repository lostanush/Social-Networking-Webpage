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
  console.log("Post : ", req.body);
  const { content } = req.body;
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
    console.log("req files : ", req.files);
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
