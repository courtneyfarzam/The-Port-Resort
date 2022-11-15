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
        linkedin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_starting: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_ending: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        school_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        graduation_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project1_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project1_desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repository1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project2_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project2_desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repository2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project3_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project3_desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repository3: {
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