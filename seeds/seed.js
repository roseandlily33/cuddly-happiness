const userData =  require('./userData');
const postData = require('./postData');
const sequelize = require('../config/connection');
const {User, Post} = require('../models');

const seedDatabase =async() => {
    try{
        await sequelize.sync({force: true});
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true
        });

        for(const post of postData){
            await Post.create({
                ...post,
                user_id: users[Math.floor(Math.random()*users.length)].id,
            })
        }
        process.exit(0);

    } catch(err){
        console.log(err);
    }

}
seedDatabase();