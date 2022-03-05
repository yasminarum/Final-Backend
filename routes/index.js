var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/', (req, res) => {
  res.sender('POST request to the homepage')
});

module.exports = router;
