const {User} = require('../models/User');

const userData = [
    {
        "username":" Stephanie123",
        "password": "password1234"
    },
    {
        "username": "Kendall123",
        "password": "password1234"
    }, 
    {
        "username": "Tyler89",
       "password": "password1234"
    }, 
    {
       "username": "Hailey562",
        "password": "password1234"
    }
];
const seedData = () => User.bulkCreate(userData);
module.exports = seedData;