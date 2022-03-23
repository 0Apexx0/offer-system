const express = require('express');
const router = express.Router()

// routing to version 1
router.use('/v1', require('./v1'));

module.exports = router ;