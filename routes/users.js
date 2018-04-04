var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
	res.render('register');
});


// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var phonenumber = req.body.phonenumber;
	var qualification = req.body.qualification;
	var skills = req.body.skills;
	var experience = req.body.experience;
	var yearofpassing = req.body.yearofpassing;
	var address = req.body.address;
	var pincode = req.body.pincode;
	var real = req.body.real;
	var academic = req.body.academic;


	console.log(name);
	console.log(email);
	console.log(phonenumber);
	console.log(qualification);
	console.log(skills);
	console.log(experience);
	console.log(yearofpassing);
	console.log(address);
	console.log(pincode);
	console.log(real);
	console.log(academic);
});
module.exports = router;