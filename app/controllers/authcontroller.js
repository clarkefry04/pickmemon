var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/main");
});

 
// router.get("/signup", function(req, res) {
//     res.render('signup');
// });
 
// router.get("/signin", function(req, res) {
//     res.render('signin');
// });

// router.get("/swiper", function(req,res) {
// 	res.render('swiper');
// });

// router.get("/battle", function(req,res) {
// 	res.render('battle');
// });
 
// router.get("/dashboard", function(req, res) {
//     res.render('dashboard');
// });

// router.get("/logout", function(req, res) {
//     req.session.destroy(function(err) {
//         res.redirect('/');
//     });
// });

// module.exports = router;




var exports = module.exports = {}
 
 
exports.signup = function(req, res) {
    res.render('signup');
}
 
exports.signin = function(req, res) {
    res.render('signin');
}

exports.swiper = function(req,res) {
	res.render('swiper');
}

exports.battle = function(req,res) {
	res.render('battle');
}
 
exports.dashboard = function(req, res) {
    res.render('dashboard');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
 
}

