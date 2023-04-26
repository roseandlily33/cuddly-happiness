const Post = require('../models/Post');
const postData =[
    {
        "post_title": "Chocolate Cake",
        "post_content": "A delicious decadent dessert served at many birthday parties",
        "user_id": 2
    },
    {
        "post_title": "Birthday Cake",
        "post_content": "A vanilla cake batter with pounds of delicious rainbow coloured sprinkles",
        "user_id": 1
    }, 
    {
        "post_title": "Vanilla Cake",
        "post_content": "A moist white cake topped with a delicious buttercream icing",
        "user_id": 3
    }, 
    {
        "post_title": "Lemon Cake",
        "post_content": "Dont let this name fool you, this cake isnt as tart as you think",
        "user_id": 1
    },
    {
        "post_title": "Red Velvet Cake",
        "post_content": "Topped with cream cheese icing, this red velvet cake is made for royals",
        "user_id" : 2
    }
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;

