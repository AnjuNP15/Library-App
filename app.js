const express = require('express');
const app = express();
var parser = require('body-parser');
const underconstruction = express.Router();
const addbook = express.Router();
const signupdata=require('./src/model/signupdata');

const nav = [
    {
        link: '/books', name: 'Books' 
    },
    { 
        link: '/authors', name: 'Authors'
    },
    {
        link: '/admin/addbookadmin', name: 'Add Book'
    },
    {
        link: '/admin/addauthoradmin', name: 'Add Author'
    },
    {
        link: '/admin/deletebookadmin', name: 'Delete Book'
    },
    {
        link: '/admin/deleteauthoradmin', name: 'Delete Author'
    }

]
const booksrouter = require('./src/routes/bookroutes.js')(nav);
const authorsrouter = require('./src/routes/authorroutes.js')(nav);
const signuprouter = require('./src/routes/signuprouter.js');
const indexrouter = require('./src/routes/indexrouter.js')(nav);
const Adminrouter = require('./src/routes/adminroutes.js')(nav);

app.use(express.urlencoded({extended:true}));  
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views')
// app.use(parser.urlencoded({ extended: false }))
// app.use(parser.json())
app.use('/books', booksrouter);
app.use('/authors', authorsrouter);
app.use('/signup', signuprouter);
app.use('/index',indexrouter);
app.use('/underconstruction', underconstruction);
app.use('/admin', Adminrouter);


app.get('/underconstruction', function (req, res) {
    res.render("underconstruction", {
        title: 'Library App',
        nav
    });
});

app.get('/', function (req, res) {

    res.render("login", {
        title: 'Library App'
    });
});


app.post('/', function (req, res) {
    var myquery = {username :req.body.username };
    // ,password:req.body.password
     signupdata.findOne(myquery)
       .then(function(value){
        console.log(value);
       if(value){
        res.render("index",{
            title:'Library App',
            nav
        }) 
       }  
       else {
        
        res.render("login",{
        title:'LOGINFAILED'
        })
       }  
    });



    });


app.listen(process.env.PORT || 3000);
console.log("Started on PORT 3000");