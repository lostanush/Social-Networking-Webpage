import { expressjwt } from "express-jwt";
import Post from "../models/post.js";

export const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth", // This sets the property name in req object where decoded token is attached
});

export const canEditDeletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);
    // console.log("Post in Editdelete middleware: ", post);
    if (req.auth._id != post.postedBy) {
      return res.status(400).send("unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
