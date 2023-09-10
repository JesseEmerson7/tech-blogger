const router = require("express").Router();
const { where } = require("sequelize");
const { User, Post, Comment } = require("../models/index");
const { raw } = require("express");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    console.log("not logged in");
    res.redirect("login");
  } else {
    const userData = await User.findOne(
      {
        where: { id: req.session.UserId },
        include: Post,
      },

      { raw: true }
    );

    let { username, Posts } = userData.dataValues;
    console.log(userData.dataValues);
    console.log("logged in");
    console.log(req.session.UserId);
    res.render("dashboard", { username, Posts });
  }
});

//deleting post from delete button

router.post("/delete", async (req, res) => {
  if (!req.session.loggedIn) {
    console.log("not logged in");
    res.redirect("login");
  } else {
    console.log(req.body);
    const postDelete = await Post.destroy({
      where: { id: req.body.data },
    });

    if (postDelete === 0) {
      console.log("Post not found");
      res.status(404).send("Post not found");
    }
    res.status(200).send("Post deleted");

    console.log(postDelete);
  }
});

module.exports = router;
