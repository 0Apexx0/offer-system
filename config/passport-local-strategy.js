const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// Authenticate using passport
passport.use(
    new LocalStrategy(
        {
            usernameField : "email",
        },
        (email, password, done)=>{
            User.findOne({email : email}, (err, user)=>{
                if(err){console.error.bind('Error ', err); return done(err);}


                if(!user){
                    console.log('Wrong Username');
                    return done(null, false, {message : "User Not Found...!"});
                }

                if(user.password != password){
                    console.log('Wrong Password');
                    return done(null, false, {message : "Password Not Valid..!"});
                }
                return done(null, user);
            });
        }
    )
);

// serialize the user 
passport.serializeUser((user , done)=>{

    done(null, user.id.toString());
});

// deserializiing the user
passport.deserializeUser((id,done)=>{
    User.findById(id, (err, user)=>{
        if(err){

            console.log("Error in finding User : passport : ", err);
            return done(err);
        }
        
        return done(null, user);
    });
});

passport.checkAuthentication = (req, res, next)=>{
    //if the user is sign in then, pass on the request to the next function (controller's action)
    if(req.isAuthenticated()){
        return next();
    }else{
        console.log('check req is auth :: ', req);
        return req.redirect("/user/login");
    }

};



passport.setAuthenticatedUser = async function (req, res, next) {
    if (req.isAuthenticated()) {
       res.locals.user =  req.user;  
    }
    next();
};
  
module.exports = passport;