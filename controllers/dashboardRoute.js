const router = require('express').Router();
const { Portfolio, User } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../config/connection');

router.get('/', withAuth, async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;

