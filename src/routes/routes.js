const express = require('express');
const router = express.Router();
const helloRoutes = require('./helloRoutes');
const userRoutes = require('./userRoutes');

router.use('/hello', helloRoutes);
router.use('/users', userRoutes);


module.exports = router;