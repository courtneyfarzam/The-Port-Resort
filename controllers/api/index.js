const router = require('express').Router();
const userRoute = require('./userRoute');
const portRoute = require('./portRoute');

router.use('/user', userRoute);
router.use('/portfolio', portRoute);

module.exports = router;
