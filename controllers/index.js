module.exports = function (req,res) {
	req.models.Messages.find({},{limit:10,order:['id','Z']}, function(err, messages) {
	    res.render('index',{responds:messages.reverse()});
	});
}