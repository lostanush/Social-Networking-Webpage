// const Post = require("../models/post");

exports.users = (req, res) => {
  res.json({
    users: [
      {
        name: "Anush",
        age: 21,
      },
      {
        name: "Ayush",
        age: 19,
      },
    ],
  });
};

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((err) => console.log(err));
};

//with using express-validator:
exports.createPost = (req, res) => {
  const post = new Models(req.body);
  post.save().then((result) => {
    res.status(200).json({
      post: result,
    });
  });
};

/*
exports.createPost = (req, res) => {
    const post = new Models(req.body);
    post.save()
        .then(result => {
            res.status(200).json({
                post: result
            });
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        });
};
*/

/*  EASY METHOD : 
exports.createPost = async (req, res) => {
    const post = new Models(req.body);
    try {
        const result = await post.save();
        res.status(200).json({
            post: result
        });
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
*/

/*  SHOWING ERROR DUE TO LATEST UPDATED 
exports.createPost= (req,res)=> {
    const post= new Models(req.body)
    //console.log("CREATING POST ...",req.body)
    post.save((err,result)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
        res.status(200).json({
            post: result
        })
    })
} 
*/
