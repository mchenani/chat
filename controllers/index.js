module.exports = function (req,res) {
	req.models.Messages.find({},{limit:20,order:['id','Z']}, function(err, messages) {
		console.log('New User Logged in');
	    res.render('index',{responds:messages.reverse()});
	});
}