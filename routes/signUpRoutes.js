const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.render("signUp");
});

router.post("/", async (req, res) => {
  try {
    const newUsername = req.body.username;
    const newUserPassword = req.body.password;
    const newUser = await User.create({
      username: newUsername,
      password: newUserPassword,
    });
    if (!newUser) {
      res.status(400).json();
    } else {
      res.status(200).json();
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
