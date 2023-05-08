const router = require("express").Router();
const { User, Post, Comment } = require("../models/index");

router.get("/", async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["username", "createdAt"],
      },
      {
        model: Comment,
        attributes: ["body"], // specify the attributes you want to retrieve
      },
    ],
  });
  const postData = posts.map((post) => post.get({ plain: true }));
  console.log(postData);

  res.render("homePage");
});

module.exports = router;
