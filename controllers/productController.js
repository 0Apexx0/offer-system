const Product = require('../models/products');
const Claim = require('../models/claim-offer');

const User = require('../models/user');


module.exports.addProduct = (req, res)=>{
    Product.create({
        id: req.body.id ,
        title: req.body.title,
    
        description: req.body.description,
        image: req.body.image
    }, (err , product)=>{
        if(err){console.log(err); return;}
        console.log(product);
        res.status(200).send(product);
    })
    return res.render('products');
}
module.exports.addProductPage = (req, res)=>{
    Product.find({},)
    return res.render('products');
}

module.exports.claimProductPage = async (req, res)=>{
     

    let product = await Product.findOne({ id : req.query.id});
    
    return res.render('products' ,{
        product : product,
        user : req.query.uid
    });
}
module.exports.claimProduct = async (req, res)=>{

    
    
    
    let product = await Product.findOne({ id : req.body.id});
    if(product){
        let claimByUser = await Claim.findOne({ claimBy : req.body.claimBy , id : req.body.id });
        if(claimByUser){
            req.flash('error' , 'already claimed by you');
            return res.redirect('back');
        }
        let claim = await Claim.create({
            id: req.body.id ,
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            claimBy : req.body.claimBy,
            claimedProduct : req.body.claimedProduct
        })

        

        req.flash('success' , 'claimed successfully!');
        return res.redirect('/user/all-offer/?uid='+req.body.claimBy );
    }
    req.flash('error' , 'no product');
    return res.redirect('back');
}