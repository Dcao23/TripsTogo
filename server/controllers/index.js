const router = require('express').Router();

const apiRoutes = require('./api');
const controllerRoutes = require('./controllerRoutes');

router.use('/', controllerRoutes);
router.use('/api', apiRoutes);

module.exports = router;