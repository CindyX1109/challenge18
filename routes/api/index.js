const router = require('express').Router();
const categoryRoutes = require('./thought-routes');
const productRoutes = require('./user-routes');


router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
