const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3],
            }
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 250],
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName:true,
        underscoared: true,
        modelName: 'post',
    }
);

module.exports = Post;