function indexrouters(nav){

const express = require('express');
const indexrouter =express.Router();
indexrouter.get('/', function(req,res){
    res.render("index",{
    nav,
    title:'Library App'
    });
});
return indexrouter
}
module.exports=indexrouters;