const express = require('express');
const signuprouter =express.Router();
const signupdata = require('../model/signupdata');



signuprouter.get('/', function(req,res){
    res.render("signup");
});


signuprouter.post('/', function (req, res) {
    var item = {
    username :req.body.username,    
    email:req.body.email,
    password:req.body.password
        }
   var signup= signupdata(item);
   signup.save();
   res.redirect('/signup');

});
module.exports=signuprouter;