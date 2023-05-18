const router = require("express").Router();
const { User, Post, Comment } = require("../models/index");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    console.log("not logged in");
    res.redirect("login");
  } else {
    const userData = await Post.findAll({
      where: { UserId: req.session.UserId },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
      raw: true,
    });
    console.log(userData);
    console.log("logged in");
    console.log(req.session.UserId);
    res.render("dashboard", { userData });
  }
});

// router.get("/", async (req, res) => {
//   const posts = await Post.findAll({
//     include: [
//       {
//         model: User,
//         attributes: ["username", "createdAt"],
//       },
//       {
//         model: Comment,
//         attributes: ["body"],
//         include: {
//           model: User,
//           attributes: ["username", "createdAt"],
//         }, // specify the attributes you want to retrieve
//       },
//     ],
//   });
//   const postData = posts.map((post) => post.get({ plain: true }));
//   console.log(postData);
//   console.log(postData[0].Comments);

//   res.render("dashboard",{postData});
// });

module.exports = router;
