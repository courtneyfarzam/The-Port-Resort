const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');

class Portfolio extends Model{}

Portfolio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primanyKey: true,
            autoIncrement: true
        },

        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        job_title: {
            type: DataTypes.STRING,
        },

        about: {
            type: DataTypes.STRING,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        linkedin: {
            type: DataTypes.STRING,
        },

        github: {
            type: DataTypes.STRING,
            allowNull: false
        },

        school: {
            type: DataTypes.STRING,
            allowNull: false
        },

        course: {
            type: DataTypes.STRING,
            allowNull: false
        },

        graduation_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.STRING,
        },

        company: {
            type: DataTypes.STRING,
        },

        location: {
            type: DataTypes.STRING,
        },

        job_starting: {
            type: DataTypes.STRING,
        },

        job_ending: {
            type: DataTypes.STRING,
        },

        job_description: {
            type: DataTypes.STRING,
        },

        project_name: {
            type: DataTypes.STRING,
        },

        repository: {
            type: DataTypes.STRING,
        },

        project_description: {
            type: DataTypes.STRING,
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
        modelName: 'portfolio'
    }
)

module.exports = Portfolio;
