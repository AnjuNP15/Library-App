

function router(nav){
    const express = require('express');
    const authorsrouter =express.Router();
    const authordata = require('../model/authordata');
// var authors=[
//     {
//         name: 'Khaled Hosseini',
//         language:'English',
//         genre:'Drama',
//         description:"Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.His debut novel The Kite Runner (2003) was a critical and commercial success; the book, as well as his subsequent novels, have all been at least partially set in Afghanistan and has featured an Afghan as the protagonist.<br><br>Born in Kabul, Afghanistan, Hosseinis father was a diplomat; after periods living in Iran and France, when Hosseini was 15, his family applied for asylum in the United States, where he later became a naturalised citizen. Hosseini did not return to Afghanistan until 2000 when he was 36, where he likened the experience to feeling like a tourist in [his] own country In subsequent interviews, Hosseini has admitted to feeling survivors guilt for having been able to leave the country prior to the Soviet invasion and subsequent wars.<br><br>After graduating from college, Hosseini worked as a physician in California, a situation he likened to an arranged marriage.The success of The Kite Runner meant he was able to retire from medicine in order to write full-time. His three novels have all reached various levels of critical and commercial success. The Kite Runner spent 101 weeks on The New York Times Best Seller list, including three weeks at number one.His second novel, A Thousand Splendid Suns (2007) spent 103 weeks on the chart, including 15 at number one.And the Mountains Echoed (2013), his third novel, remained on the chart for 33 weeks.In addition to his writing, Hosseini has become a noted advocate for refugees, including establishing with the UNHCR the Khaled Hosseini Foundation to support Afghan refugees returning to Afghanistan.",
//         img:"KH.jpg"
//     },
//     {
//         name: 'JK Rowling',
//         language:'English',
//         genre:'Fantasy',
//         description:'Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history.The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films.She also writes crime fiction under the pen name Robert Galbraith.<br><br>Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London. The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosophers Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.In 2020, her political fairytale for children, The Ickabog, was released in instalments in an online version.<br><br>Rowling has lived a rags to riches life in which she progressed from living on benefits to being named the worlds first billionaire author by Forbes. Rowling disputed the assertion, saying she was not a billionaire.[11] Forbes reported that she lost her billionaire status after giving away much of her earnings to charity.Her UK sales total in excess of £238 million, making her the best-selling living author in Britain.The 2020 Sunday Times Rich List estimated Rowling fortune at £795 million, ranking her as the 178th richest person in the UK.Time named her a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans. Rowling was appointed a member of the Order of the Companions of Honour (CH) in the 2017 Birthday Honours for services to literature and philanthropy. In October 2010, she was named the "Most Influential Woman in Britain" by leading magazine editors.Rowling has supported multiple charities, including Comic Relief, One Parent Families, and Multiple Sclerosis Society of Great Britain, as well as launching her own charity, Lumos. Since late 2019, Rowling has publicly voiced her opinions on transgender people and related civil rights. These views have led to controversy.',
//         img:"JK.jpg"
//     },
//     {
//         name:'Emily Bronte',
//         language:'English',
//         genre:'Drama',
//         description:'Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English literature. She also published a book of poetry with her sisters Charlotte and Anne titled Poems by Currer, Ellis and Acton Bell with her own poems finding regard as poetic genius. Emily was the second-youngest of the four surviving Brontë siblings, between the youngest Anne and her brother Branwell. She published under the pen name Ellis Bell.<br><br>Emily Brontës Wuthering Heights was first published in London in 1847 by Thomas Cautley Newby, appearing as the first two volumes of a three-volume set that included Anne Brontës Agnes Grey. The authors were printed as being Ellis and Acton Bell; Emilys real name did not appear until 1850, when it was printed on the title page of an edited commercial edition.The novels innovative structure somewhat puzzled critics.<br><br>Wuthering Heightss violence and passion led the Victorian public and many early reviewers to think that it had been written by a man.According to Juliet Gardiner, the vivid sexual passion and power of its language and imagery impressed, bewildered and appalled reviewers.Literary critic Thomas Joudrey further contextualizes this reaction: Expecting in the wake of Charlotte Brontës Jane Eyre to be swept up in an earnest Bildungsroman, they were instead shocked and confounded by a tale of unchecked primal passions, replete with savage cruelty and outright barbarism.Even though the novel received mixed reviews when it first came out, and was often condemned for its portrayal of amoral passion, the book subsequently became an English literary classic.Emily Brontë never knew the extent of fame she achieved with her only novel, as she died a year after its publication, aged 30.<br><br>Although a letter from her publisher indicates that Emily had begun to write a second novel, the manuscript has never been found. Perhaps Emily or a member of her family eventually destroyed the manuscript, if it existed, when she was prevented by illness from completing it. It has also been suggested that, though less likely, the letter could have been intended for Anne Brontë, who was already writing The Tenant of Wildfell Hall, her second novel.',
//         img:"EM.jpg"
//     }

// ] 



authorsrouter.get('/', function(req,res){
    authordata.find()
    .then(function(authors){
        res.render("authors",{
            title:'Library App',
            nav,
            authors
    })
    
    });
});

authorsrouter.get('/:id', function(req,res){
    const id =req.params.id
    authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                title:'Library App',
                nav,
                author
        })
        });
});

// authorsrouter.post('/addauthor', (req, res) => {
//     var name = req.body.Name;
//     var language = req.body.Language;
//     var genre = req.body.genre;
//     var description = req.body.description;
//     var img = req.body.img;
//     // console.log("User name = " + user_name + ", password is " + password);
//     authors.push({
//         name:name,
//         language:language,
//         genre:genre,
//         description:description,
//         img:img
//     });
//     // console.log(books);
//     res.render("authors", {
//         nav,
//         title:"Authors",
//         authors
//     });
// });
 return authorsrouter;

}
module.exports=router;
