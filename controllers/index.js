module.exports = function (req,res) {
	// req.models.Messages.find({},{limit:20,order:['id','Z']}, function(err, messages) {		
	    // res.render('index',{responds:messages.reverse()});
	// });
	res.render('index',{responds:{}});
}