const router = require("express").Router();
const { where } = require("sequelize");
const { User, Post, Comment } = require("../models/index");
const { dash } = require("../controller/index");
//displaying page
router.get("/", async (req, res) => {
  dash.userDash(req, res);
});
//deleting post from delete button
router.post("/delete", async (req, res) => {
  dash.delete(req, res);
});
//edit post routes
router
  .route("/edit/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    try {
      const PostData = await Post.findOne({
        where: { id: id },
      });
      res.json(PostData);
    } catch (error) {}
  })
  .post(async (req, res) => {
    try {
      const newPostData = req.body;
      console.log(newPostData);
      res.json(newPostData);
    } catch (error) {}
  });

module.exports = router;
