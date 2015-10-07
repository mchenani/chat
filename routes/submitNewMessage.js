var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/submitNewMessage', function(req, res, next) {
	
  res.render('submitNewMessage', { title: 'Express' });
});

module.exports = router;
