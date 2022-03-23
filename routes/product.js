const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// fetch claim offer page
router.get('/claim', productController.claimProductPage );

// claim offer
router.post('/claim-product', productController.claimProduct );

module.exports = router;