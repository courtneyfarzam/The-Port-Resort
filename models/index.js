const User = require('./user');
const Post = require('./Post');

// Associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post }