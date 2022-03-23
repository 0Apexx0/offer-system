const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// fetch product page (admin purpose  not with project)
router.get('/' , productController.addProductPage);

// fetch claim offer page
router.get('/claim', productController.claimProductPage );

// claim offer
router.post('/claim-product', productController.claimProduct );

module.exports = router;