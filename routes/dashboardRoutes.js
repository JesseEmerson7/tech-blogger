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

module.exports = router;
