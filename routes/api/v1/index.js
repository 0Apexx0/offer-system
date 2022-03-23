const express = require('express');
const router = express.Router()
const User = require('../../../models/user');
const Products = require('../../../models/products');
const Claim = require('../../../models/claim-offer');

router.get('/products' ,async (req , res)=>{
    let product = await Products.find({ });
    return res.status(200).json({data : product});
})
router.get('/user' ,async (req , res)=>{
    let user = await User.find({ });
    return res.status(200).json({data : user});
})
router.get('/claim' ,async (req , res)=>{
    let claim = await Claim.find({ });
    return res.status(200).json({data : claim});
})

router.get('/claim-product',async (req, res)=>{
    let product = await Products.findOne({ id : req.query.id});
    
    return res.status(200).send({data : product});
} );

router.post('/claimed-product', async (req, res)=>{
    let claim = await Claim.find({ claimBy : req.query.uid });
    return res.status(200).send({data : claim}); 
})

module.exports = router ;