const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedData = require('./userData');
const seedPost = require('./postData');

const seedDb = async() => {
    await sequelize.sync({force: true});
    await seedData();
    await seedPost();
    await seedComment();
    process.exit(0);
};

seedDb();