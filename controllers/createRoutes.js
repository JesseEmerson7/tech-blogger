const router = require("express").Router();
const { Post } = require("../models/index");

router.get("/", async (req, res) => {
  res.render("create");
});

//create post route when user is logged in.
router.post("/post", async (req, res) => {
  //Getting data to post to database!
  console.log(req.body);
  console.log(req.session.UserId);

//only execute if this user is logged in and has a session
  if(req.session.loggedIn){
    try {
        const dbResponse = await Post.create(
          {
            header: req.body.title,
            body: req.body.body,
            UserId: req.session.UserId,
          },
          { raw: true }
        );
        console.log(dbResponse.dataValues);
        if(dbResponse){
            res.send("Created").status(200);
        }else{
            res.status(500);
        }
      } catch (error) {
        console.log(error);
      }
  }
 
});

module.exports = router;
