var express = require('express');
var router = express.Router();

let books = [
    {id: 1, title: "StarWars", author: "Melvin", pages: "500", borrowed: false},
    {id: 2, title: "Titanic", author: "Agnes", pages: "450", borrowed: false},
    {id: 3, title: "Marvel", author: "Austin", pages: "540", borrowed: false},
]

router.get('/', function(req, res) {
    res.json(books);
  });

router.post('/', function(req, res) {
    let newBook = req.body;
    console.log(req.body);
    newBook.id = books.length + 1;
    books.push(newBook);
    console.log(newBook);
    res.json(books);
})

router.get('/:bookId', function(req, res) {
    let bookId = req.params.bookId;
    console.log(bookId);

    let findBook = books.find(books => books.id == bookId);
    res.json(findBook);
  });

router.post('/borrowed', function(req, res) {
  console.log("body", req.body)
  let bookId = req.body.bookId;
  console.log(bookId);
  let borrowedBook = books.find(books => books.borrowed == bookedBorrowed) 
  console.log("book", borrowedBook)

  borrowedBook.borrowed = true;
  res.send(`Boken är lånad`)
})  

module.exports = router;