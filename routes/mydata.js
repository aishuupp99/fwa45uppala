var express = require('express');
var router = express.Router();

/* This displays mydata.js page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Ashwini Uppala' });
});

module.exports = router;
