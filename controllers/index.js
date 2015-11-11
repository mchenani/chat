module.exports = function (server,req,res,models) {
	models.MessagesModel.find({}).limit(20).exec(function (err, responds) {
	  if (err){
	  	return handleError(err);
	  }else{
	  	res.render('index',{responds:responds});	
	  }
	})
}