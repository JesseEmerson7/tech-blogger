const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body.password);
    const loginUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!loginUser) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }
    console.log(loginUser);
    //check password to user and respond 200 if password matching. set up session req.session.save()
    const validPassword = await loginUser.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect Username or password, please try again" });
      return;
    } else {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.UserId = loginUser.id;
      res.status(200).json();
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
