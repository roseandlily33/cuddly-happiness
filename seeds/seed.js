const userData =  require('./userData');
const postData = require('./postData');
const sequelize = require('../config/connection');

const seedDatabase = async() => {
    await sequelize.sync({force: true});
    await userData();
    await postData();
    process.exit(0);
}
seedDatabase();