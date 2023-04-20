const router = require('express').Router();
const blogRoutes = require('/blog');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);

module.exports = router;