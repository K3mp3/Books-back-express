var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Bob"},
  {id: 4, name: "Alice"},
  {id: 5, name: "Bengt"},
  {id: 6, name: "Melvin"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

router.get('/test', function(req, res, next) {
  res.send('test routern');
});

module.exports = router;
