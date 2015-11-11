module.exports = function (server,req,res,models) {
	var winston = require('winston');
	winston.level = 'debug';
	var status = 0;
	
	models.UsersModel.findOne({ email: req.body.username }, function (err, thisUser) {
	  if (err){
	  	return handleError(err);
	  }else{
	  	if (thisUser === null){
	  		newUser = new models.UsersModel({ 
				email: req.body.username,
				status:1,
			});
			newUser.save(function (err) {
			  if (err){
			  	return console.error(err);
			  }
			  else{
			  	winston.log('debug', 'New User Entered Email: '+req.body.username);
			  	status = 1;
			  };
			});
	  	}else {
	  		winston.log('debug', 'Old User Entered Email: '+thisUser.email);
	  	}
	  }
	})
	var countUsers = 0;
	models.UsersModel.find({}).exec(function (err, responds) {
	  if (err){
	  	return handleError(err);
	  }else{	  	
	  	countUsers = responds.length;
	  	res.send({status:status,countUsers:countUsers});
	  }
	})	
}