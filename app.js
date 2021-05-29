const express = require('express');
const app = express();
var parser = require('body-parser');
const underconstruction = express.Router();
const addbook = express.Router();
const nav = [
    {
        link: '/books', name: 'Books'
    },
    {
        link: '/authors', name: 'Authors'
    },
    {
        link: '/addbook', name: 'Add Book'
    },
    {
        link: '/addauthor', name: 'Add Author'
    }

]
const booksrouter = require('./src/routes/bookroutes.js')(nav);
const authorsrouter = require('./src/routes/authorroutes.js')(nav);
const signuprouter = require('./src/routes/signuprouter.js');
const indexrouter = require('./src/routes/indexrouter.js')(nav);

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use('/books', booksrouter);
app.use('/authors', authorsrouter);
app.use('/signup', signuprouter);
app.use('/index', indexrouter);
app.use('/underconstruction', underconstruction);
// app.use('/addbook', addbook);


app.get('/', function (req, res) {
    res.render("login", {
        title: 'Library App'
    });
});


app.get('/underconstruction', function (req, res) {
    res.render("underconstruction", {
        title: 'Library App',
        nav
    });
});

app.get('/addbook', function (req, res) {
    res.render("addbook", {
        nav
    });
});

app.get('/addauthor', function (req, res) {
    res.render("addauthor", {
        nav
    });
});

app.listen(3000);
console.log("Started on PORT 3000");