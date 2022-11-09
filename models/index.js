const User = require('./user');
const Portfolio = require('./portfolio');

User.hasMany(Portfolio, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Portfolio.belongsTo(User, {
    foreignKey: 'id',
});

module.exports = { User, Portfolio }