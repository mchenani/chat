module.exports = function (server,req,res) {
	// Web Socket
	var winston = require('winston');
	winston.level = 'debug';
	var io = require('socket.io').listen(server);
	io.sockets.on('connection',function(socket){
		winston.log('debug','New User Connected');  
		socket.on('new-message',function(data){
			// req.models.Messages.create([
			// {
			// 	message: data.message,
			// 	username: data.username,
			// 	username_id: data.username_id,
			// }
			// ], function (err, items) {

			// });
			winston.log('debug', 'Username:'+data.username+ ' Message: '+data.message);
			io.sockets.emit('new-message',data);
		});
		socket.on('disconnect', function() {
			winston.log('debug','User Disconnected');  
		});
	});
}