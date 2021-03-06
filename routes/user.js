
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// login user router
router.get("/login", userController.login);
// sign up user router
router.get("/signup", userController.signup);
// router.get("/add-admin", userController.addAdmin);
// signout user router
router.get("/signout", userController.deleteSession);
// create new user router
router.post("/create-user", userController.create);

// use passport as a middleware to authenticate
router.post(
    "/create-session",
    passport.authenticate("local", { failureRedirect: "/login" }),
    userController.createSession
);

// fetching all the products on the homepage
router.get('/all-offer' , userController.allOffer)

module.exports = router;