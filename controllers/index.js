const router = require('express').Router();
const { Router } = require('express');
const apiRoutes = require('./api');

//Need to add routes
//Home Route

router.use('/api', apiRoutes);

module.exports = router