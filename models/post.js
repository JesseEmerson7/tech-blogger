const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
        header:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        timestamps: true,
    }
);

module.exports = Post;