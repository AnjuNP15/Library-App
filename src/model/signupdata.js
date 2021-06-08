//Accessing mongoose package
const mongoose=require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/Library');
const Schema=mongoose.Schema

//Schema connection
const signupschema=new Schema({
    username:String,
    email:String,
    password:String
});
var signupdata=mongoose.model('signupdata',signupschema);
module.exports=signupdata;