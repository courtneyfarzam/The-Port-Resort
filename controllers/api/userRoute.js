const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/logout', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;