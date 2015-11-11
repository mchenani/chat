module.exports = function (server,req,res,models) {
	// Web Socket
	var winston = require('winston');
	winston.level = 'debug';
	var io = require('socket.io').listen(server);
	var email = 'no-email';
	io.sockets.on('connection',function(socket){
		winston.log('debug','New User Connected');  
		socket.on('new-data',function(data){	
			email = data.email;
			if (typeof data.message != 'undefined'){
				newMessage = new models.MessagesModel({ 
					message: data.message,
					email: data.email 
				});
				newMessage.save(function (err) {
				  if (err){
				  	return console.error(err);
				  }
				  else{
				  	models.UsersModel.update({email: email},{ status: 1 },function (err, thisUser) {
						if (err){
							return handleError(err);
						}else{
							models.UsersModel.find({ status: 1 }, function (err, onlineUsers) {
							  if (err){
							  	return handleError(err);
							  }else{
							  	data.onlineUsers = onlineUsers;
							  	winston.log('debug', 'Username:'+data.email+ ' Message: '+data.message);
								io.sockets.emit('new-data',data);	
							  }
							})							
						}
					})				  	
				  };
				});
			}else {	
				models.UsersModel.update({email: email},{ status: 1 },function (err, thisUser) {
					if (err){
						return handleError(err);
					}else{
						models.UsersModel.find({ status: 1 }, function (err, onlineUsers) {
						  if (err){
						  	return handleError(err);
						  }else{						  	
						  	data.onlineUsers = onlineUsers;
						  	winston.log('debug','New User Logged in and status changed to 1');  
							io.sockets.emit('new-data',data);	
						  }
						})							
					}
				})
			}

		});
		socket.on('disconnect', function() {
			models.UsersModel.update({email: email},{ status: 2 },function (err, thisUser) {
				if (err){
					return handleError(err);
				}else{
					winston.log('debug','User Disconnected and status changed to 2');  
				}
			})
		});
	});
}