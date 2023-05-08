const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData");
const postData = require("./postData");
const commentData = require("./commentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);

  console.log("All models were synched successfully");

  process.exit(0);
};

seedDatabase();
