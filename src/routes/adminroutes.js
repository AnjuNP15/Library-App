
function router(nav){

const express = require('express');
const Adminrouter =express.Router();
const bookdata=require('../model/bookdata');
const authordata=require('../model/authordata');


Adminrouter.get('/addbookadmin', function (req, res) {
    res.render("addbook", {
        nav
    }); 
});

Adminrouter.get('/addauthoradmin', function (req, res) {
    res.render("addauthor", {
        nav
    });
});


Adminrouter.get('/deletebookadmin', function (req, res) {
    bookdata.find()
    .then(function(books){
        res.render("deletebook",{
            title:'Library App',
            nav,
            books
        })    
    });
});
 

Adminrouter.get('/deleteauthoradmin', function (req, res) {
    authordata.find()
    .then(function(authors){
        res.render("deleteauthor",{
            title:'Library App',
            nav,
            authors
        })    
    });
});


Adminrouter.post('/addbookadmin', function (req, res) {
    var item = {
    title :req.body.title,    
    author:req.body.author,
    genre:req.body.genre,
    description:req.body.description,
    img:req.body.img
    }
   var book= bookdata(item);
   book.save();
   res.redirect('/books');

});


Adminrouter.post('/addauthoradmin', function (req, res) {
    var items = {
    name :req.body.name,    
    language:req.body.language,
    genre:req.body.genre,
    description:req.body.description,
    img:req.body.img
    }
   var author= authordata(items);
   author.save();
   res.redirect('/authors');
});


Adminrouter.post('/deletebookadmin', function (req, res) {
var myquery = { title: req.body.delete };
bookdata.deleteOne(myquery, function(err, obj) {
    if (err) throw err;
  
  });
   res.redirect('/admin/deletebookadmin');
});

Adminrouter.post('/deleteauthoradmin', function (req, res) {
    var myquery = { name: req.body.delete };
    authordata.deleteOne(myquery, function(err, obj) {
        if (err) throw err;
      
      });
       res.redirect('/admin/deleteauthoradmin');
    });

return Adminrouter;

}
module.exports=router;
