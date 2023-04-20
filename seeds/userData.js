const { User } = require('../models');

const userData = [
    {
        username: 'Stephanie123',
        password: 'password1234'
    },
    {
        username: 'Kendall123',
        password: 'password123'
    }, 
    {
        username: 'Tyler89',
        password: 'password12'
    }, 
    {
        username: 'Hailey562',
        password: 'password1'
    }
];

const seedDatabase = () => User.bulkCreate(userData);

module.exports = seedDatabase;