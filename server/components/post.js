import Post from "../models/post.js";

export const createPost = async (req, res) => {
  console.log("Post : ", req.body);
  const { content } = req.body;
  if (!content || !content.length) {
    return res.json({
      error: "Content is empty",
    });
  }
  try {
    const post = new Post({ content, postedBy: req.auth._id });
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
