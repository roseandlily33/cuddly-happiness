const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedData = require('./userData');
const seedPost = require('./postData');

const seedDb = async() => {
    await sequelize.sync({force: true});
    await seedComment();
    await seedPost();
    await seedData();
    process.exit(0);
};

seedDb();