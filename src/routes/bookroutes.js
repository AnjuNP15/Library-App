

function router(nav){
    const express = require('express');
    const booksrouter =express.Router(); 
    const bookdata = require('../model/bookdata');
// var books=[
//     {
//         title: 'Kite Runner',
//         author:'Khaled Hosseini',
//         genre:'Drama',
//         description:'The Kite Runner is the first novel by Afghan-American author Khaled Hosseini.Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul. The story is set against a backdrop of tumultuous events, from the fall of Afghanistans monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime.<br><br>Hosseini has commented that he considers The Kite Runner to be a father-son relationship story, emphasizing the familial aspects of the narrative, an element that he continued to use in his later works.Themes of guilt and redemption feature prominently in the novel, with a pivotal scene depicting an act of sexual assault that happens against Hassan that Amir fails to prevent. The situation as a whole was the main reason why Amir and Hassans friendship ended. The latter half of the book centers on Amirs attempts to atone for this transgression by rescuing Hassans son two decades later.<br><br>The Kite Runner became a bestseller after being printed in paperback and was popularized in book clubs. It appeared on the New York Times bestseller list for over two years, with over seven million copies sold in the United States. Reviews were generally positive, though parts of the plot drew significant controversy in Afghanistan. A number of adaptations were created following publication, including a 2007 film of the same name, several stage performances, and a graphic novel. The novel is also available in a multi-CD audiobook read by the author.',
//         img:"kiterunner.jpg"
//     },
//     {
//         title: 'Harry Potter',
//         author:'JK Rowling',
//         genre:'Fantasy',
//         description:'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harrys struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).<br><br>Since the release of the first novel, Harry Potter and the Philosophers Stone, on 26 June 1997, the books have found immense popularity, positive reviews, and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature. As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages. The last four books consecutively set records as the fastest-selling books in history, with the final instalment selling roughly eleven million copies in the United States within twenty-four hours of its release.<br><br>The series was originally published in English by two major publishers, Bloomsbury in the United Kingdom and Scholastic Press in the United States. A play, Harry Potter and the Cursed Child, based on a story co-written by Rowling, premiered in London on 30 July 2016 at the Palace Theatre, and its script was published by Little, Brown. The original seven books were adapted into an eight-part namesake film series by Warner Bros. Pictures, which is the third highest-grossing film series of all time as of February 2020. In 2016, the total value of the Harry Potter franchise was estimated at $25 billion,making Harry Potter one of the highest-grossing media franchises of all time.<br><br>A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.According to Rowling, the main theme is death.Other major themes in the series include prejudice, corruption, and madness.',
//         img:"Harrypotter.jpg"
//     },
//     {
//         title:'Wuthering Heights',
//         author:'Emily Bronte',
//         genre:'Drama',
//         description:'Wuthering Heights is an 1847 novel by Emily Brontë, published under the pseudonym Ellis Bell. It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with Earnshaws adopted son, Heathcliff. It was influenced by Romanticism and Gothic fiction.<br><br>Wuthering Heights is now considered a classic of English literature, but contemporaneous reviews were polarised. It was controversial for its depictions of mental and physical cruelty, and for its challenges to Victorian morality, and religious and societal values.<br><br>Wuthering Heights was accepted by publisher Thomas Newby along with Anne Brontës Agnes Grey before the success of their sister Charlottes novel Jane Eyre, but they were published later. Charlotte edited a second edition of Wuthering Heights after Emilys death which was published in 1850.',
//         img:"wutheringheights.jpg"
//     }

// ]



booksrouter.get('/', function(req,res){
    bookdata.find()
    .then(function(books){
        res.render("books",{
            title:'Library App',
            nav,
            books
            
    });
   
    });
});

booksrouter.get('/:id', function(req,res){
    const id =req.params.id
    bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book",{
            title:'Library App',
            nav,
            book
    })
    
    });
});

// booksrouter.get('/addbook', function (req, res) {
//     res.render("addbook", {
//         nav
//     });
// });


// booksrouter.post('/addbook', (req, res) => {
//     var title = req.body.title;
//     var author = req.body.author;
//     var genre = req.body.genre;
//     var description = req.body.description;
//     var img = req.body.img;
//     // console.log("User name = " + user_name + ", password is " + password);
//     books.push({
//         title:title,
//         author:author,
//         genre:genre,
//         description:description,
//         img:img
//     });
//     console.log(books);
//     res.render("books", {
//         nav,
//         title:"jsdnk",
//         books
//     });
// });

 return booksrouter;

}
module.exports=router;
