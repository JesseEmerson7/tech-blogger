const router = require('express').Router();

router.get("/", async (req, res) => {
    res.render("create");
  });

  module.exports = router;