const User = require("./User");
const Post = require("./post");
const Comment = require("./comment");
User.hasMany(Post);
Post.belongsTo(User, {
  through: "UserId",
});
User.hasMany(Comment);
Comment.belongsTo(User, {
    foreignKey:"UserId"
  });
  Comment.belongsTo(Post, {
    foreignKey:"PostId"
  });
Post.hasMany(Comment);

module.exports = { User, Post, Comment };
