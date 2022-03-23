

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// reflect signup page
router.get('/' , userController.home );

// routing to user 
router.use('/user' , require('./user'));

// routing to product 
router.use('/product' , require('./product'));

// api requests
router.use('/api' , require('./api'));


module.exports = router;