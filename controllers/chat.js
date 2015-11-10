module.exports = function (server,req,res,models) {
	// Web Socket
	var winston = require('winston');
	winston.level = 'debug';
	var io = require('socket.io').listen(server);
	var email = 'no-email';
	io.sockets.on('connection',function(socket){
		winston.log('debug','New User Connected');  
		
		socket.on('new-data',function(data){			
			if (typeof data.message != 'undefined'){
				newMessage = new models.MessagesModel({ 
					message: data.message,
					email: data.username 
				});
				newMessage.save(function (err) {
				  if (err){
				  	return console.error(err);
				  }
				  else{
				  	winston.log('debug', 'Username:'+data.username_id+ ' Message: '+data.message);
				  };
				});
			}else {
				email = data.username;
				models.UsersModel.update({email: email},{ status: 1 },function (err, thisUser) {
					if (err){
						return handleError(err);
					}else{
						winston.log('debug','New User Logged in and status changed to 1');  
					}
				})
			}
			io.sockets.emit('new-data',data);	
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