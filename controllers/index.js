const router = require('express').Router();
const apiRoutes = require('./api');
const profile = require('./profileRoute');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute)
router.use('/profile', profile)
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;