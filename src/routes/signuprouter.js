const express = require('express');
const signuprouter =express.Router();




signuprouter.get('/', function(req,res){
    res.render("signup");
});

module.exports=signuprouter;