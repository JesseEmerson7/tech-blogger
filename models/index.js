const User = require("./User");
const Post = require("./post");
const Comment = require("./comment");
User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

module.exports = { User, Post, Comment };
