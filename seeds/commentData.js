const Comment = require('../models/Comment');
const commentData = [
    {
        "comment_content": "Delicious",
        "user_id": 1,
        "post_id": 2
    },
    {
        "comment_content": "Goodness on a plate",
        "user_id": 3,
        "post_id": 2

    },
    {
        "comment_content": "My Fave",
        "user_id": 2,
        "post_id": 3
    }
];
const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;