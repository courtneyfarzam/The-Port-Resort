const { User } = require('../models')

const userData = [
    {
        "name": "Bob",
        "email": "email@email.com",
        "password": "password"
    },
    {
        "name": "Ben",
        "email": "ben@email.com",
        "password": "password1"
    },
    {
        "name": "tom",
        "email": "tom@email.com",
        "password": "password2"
    }
]

const seedUser = () => User.bulkCreate(userData);


module.exports = seedUser;