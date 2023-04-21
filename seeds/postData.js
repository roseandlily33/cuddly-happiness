const {Post} = require('../models/Post');
const postData =[
    {
        "post_title": "Chocolate Cake",
        "post_content": "A delicious decadent dessert served at many birthday parties",
        "post_date": "January 23, 2023",
        "user_id": 2
    },
    {
        "post_title": "Birthday Cake",
        "post_content": "A vanilla cake batter with pounds of delicious rainbow coloured sprinkles",
        "post_date" : "March 20, 2023",
        "user_id": 1
    }, 
    {
        "post_title": "Vanilla Cake",
        "post_content": "A moist white cake topped with a delicious buttercream icing",
        "post_date": "April 9, 2023",
        "user_id": 3
    }, 
    {
        "post_title": "Lemon Cake",
        "post_content": "Dont let this name fool you, this cake isnt as tart as you think",
        "post_date": "February 12, 2023",
        "user_id": 1
    },
    {
        "post_title": "Red Velvet Cake",
        "post_content": "Topped with cream cheese icing, this red velvet cake is made for royals",
        "post_date": "December 21, 2022",
        "user_id" : 4
    }
];

const seedPost = () => Post.createBulk(postData);
module.exports = seedPost;

