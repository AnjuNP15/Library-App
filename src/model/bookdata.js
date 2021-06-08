//Accessing mongoose package
const mongoose=require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');
const Schema=mongoose.Schema

//Schema connection
const bookschema=new Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    img:String,
});
var bookdata=mongoose.model('bookdata',bookschema);

module.exports=bookdata;