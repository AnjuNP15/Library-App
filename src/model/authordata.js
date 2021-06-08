//Accessing mongoose package
const mongoose=require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');
const Schema=mongoose.Schema

//Schema connection
const authorschema=new Schema({
    name:String,
    language:String,
    genre:String,
    description:String,
    img:String,
});

var authordata=mongoose.model('authordata',authorschema);

module.exports=authordata;