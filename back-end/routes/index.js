const express = require('express');
const router = express.Router();
const hewwo = require('./hewwo')

router.use('/hewwo', hewwo)

module.exports = router;