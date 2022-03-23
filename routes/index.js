

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/' , userController.home );

router.use('/user' , require('./user'));
router.use('/product' , require('./product'));

// api requests
router.use('/api' , require('./api'));


module.exports = router;