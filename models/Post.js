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
            type: DataTypes.TEXT,
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        github: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        linkedin: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        role: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        company: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        job_starting: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        job_ending: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        job_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        school_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        graduation_date: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        degree: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project1_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project1_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        repository1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project2_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project2_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        repository2: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project3_name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        project3_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        repository3: {
            type: DataTypes.TEXT,
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