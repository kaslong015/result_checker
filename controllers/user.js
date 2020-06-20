var mongoose = require('mongoose');
var User = require('../models/user');
var genPassword = require('../utils/passwordutils').genPassword;

exports.register = (req,res,next)=>{
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt,
        admin: true
    });

    newUser.save()
        .then((user) => {
            res.redirect('/login');
        });
};

exports.getlogin = (req,res,next) =>{
    res.render('login');
};

exports.homepage = (req,res,next) =>{
    res.render('home');
};

exports.getadmin = (req,res,next) =>{
    res.render('admin/index');
};