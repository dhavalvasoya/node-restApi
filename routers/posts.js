const express = require("express");
const Post = require("../Model/PostModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const postData = await Post.find();
    res.json(postData);
    console.log("all post data ", postData);

  } catch (err) {
    res.send("error" + err);
  }
});

router.get("/:postId", async (req, res) => {
  console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
    console.log("post find by id", post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
    console.log("deletePost", removePost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
    console.log("updatedPost", post);
    console.log("updatedPost", post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
