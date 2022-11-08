const router = require('express').Router();
const apiRoutes = require('./api');
const dashboard = require('./dashboardRoute');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute)
router.use('/dashboard', dashboard)
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;