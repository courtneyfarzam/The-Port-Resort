const { Model, DataTypes} =require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project_desc: {
            type: DataTypes.STRING
        },
        school_name: {
            type: DataTypes.STRING
        },
        graduation: {
            type: DataTypes.STRING
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        workExp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        empDate: {
            type: DataTypes.STRING,
        },
        jobDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;