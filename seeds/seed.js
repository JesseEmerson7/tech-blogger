const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');




const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 console.log('All models were synched successfully');

  process.exit(0);
};

seedDatabase();