const express = require('express');
const router = express.Router();
const helloRoutes = require('./helloRoutes');

router.use('/hello', helloRoutes);

module.exports = router;