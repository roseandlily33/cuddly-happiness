const {Post} = require('../models');

const postData = [
    {
        title: 'Chocolate Cake',
        content: 'A delicious decadent dessert served at many birthday parties'
    },
    {
        title: 'Birthday Cake',
        content: 'A vanilla cake batter with pounds of delicious rainbow coloured sprinkles'
    }, 
    {
        title: 'Vanilla Cake',
        content: 'A moist white cake topped with a delicious buttercream icing'
    }, 
    {
        title: 'Lemon Cake',
        content: 'Dont let this name fool you, this cake isnt as tart as you think'
    },
    {
        title: 'Red Velvet Cake',
        content: 'Topped with cream cheese icing, this red velvet cake is made for royals'
    }
];

const seedDatabase = () => Post.bulkCreate(postData);

module.exports = seedDatabase;