const router = require('express').Router();
const { User, Portfolio } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/portfolio/:id', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;