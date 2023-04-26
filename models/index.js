const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCASE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User,{
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = {User, Post, Comment};