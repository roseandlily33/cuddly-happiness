const {Comment} = require('../models/Comment');
const commentData = [
    {
        "comment_content": "Delicious",
        "comment_date": "March 2, 2023",
        "user_id": 1,
        "post_id": 2
    },
    {
        "comment_content": "Goodness on a plate",
        "comment_date": "January 4, 2023",
        "user_id": 3,
        "post_id": 2

    },
    {
        "comment_content": "My Fave",
        "comment_date": "April 11, 2023",
        "user_id": 2,
        "post_id": 3
    }
];
const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;