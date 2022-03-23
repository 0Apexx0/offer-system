
const Product = require('../models/products');
const User = require("../models/user");


// fetch signup page
module.exports.home = (req, res)=>{
    return res.render('signup');
}




// fetch login page
module.exports.login = async function (req, res) {
  if (!req.isAuthenticated()) {
    return res.render("login");
  }
  console.log("you'r already logged In");
  return res.redirect("/");
};


// signing up
module.exports.signup = function (req, res) {
  if (!req.isAuthenticated()) {
   
    return res.render("signup");
  }
  console.log("You are already logged, So you can't create account now");
  return res.redirect("/");
};

// create new user
module.exports.create = async function (req, res) {
  const { name, email, password, confirmPassword } = req.body;
    console.log(req.body);
  if (password === confirmPassword) {
    let check_user = await User.findOne({email : email});
    if (check_user) {
      console.log("Email id is already registred");
      return res.redirect("/user/login");
    } else {
      const new_user = await User.create({
        name,
        isAdmin: false,
        email,
        password,
      });
      await new_user.save();
      if (!new_user) {
        console.log("Error while creating ");
        return res.redirect("/user/signup");
      }
    }
    
    return res.redirect("/user/login");
  } else {
    console.log("Password && Confirm Password do not match");
    return res.redirect("/user/signup");
  }
};

// Sign In and create a session for the user
module.exports.createSession = function (req, res) {
    
  console.log("loggin Successfully");
  return res.redirect("/user/all-offer/?uid="+ req.user._id);
};

module.exports.deleteSession = function (req, res) {
  req.logout();
  console.log("logout");
  return res.redirect("/");
};

// fetching all the offers in the homepage
module.exports.allOffer = async (req , res)=>{
    let product = await Product.find({});
    if (req.xhr){
                
    
      return res.status(200).send(product);
  }
    return res.render('show-offer', {
      product : product,
      user : req.query.uid
    });
}