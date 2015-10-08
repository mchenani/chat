var express = require('express');
var router = express.Router();
var db = require('../modules/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT id,message,username FROM messages ORDER BY id DESC LIMIT 10", function(err, rows, fields) {
      res.render('index', { title: 'Express', data: rows.reverse() });
  });
});

module.exports = router;
