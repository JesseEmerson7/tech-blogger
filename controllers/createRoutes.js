const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("create");
});

router.post("/post", async (req, res) => {
  console.log(req.body);
res.send("hello");
});

module.exports = router;
