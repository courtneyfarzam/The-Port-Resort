const { User } = require('../models')

const userData = [
    {
        "name": "Bob",
        "email": "email@email.com",
        "password": "password"
    },

    {
        "name": "Bob",
        "email": "email@email.com",
        "password": "password"
    },

    {
        "name": "Bob",
        "email": "email@email.com",
        "password": "password"
    }
]

const seedUser = () => {
    User.bulkCreate(userData);
};

module.exports = seedUser;