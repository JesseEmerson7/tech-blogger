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
        where:{id: req.session.UserId},
        include: Post
      },
      
      {raw: true}
    );

    let {username, Posts } = userData.dataValues;
    console.log(userData.dataValues);
    console.log("logged in");
    console.log(req.session.UserId);
    res.render("dashboard", { username, Posts });
  }
});

module.exports = router;
