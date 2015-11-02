
module.exports = function (server,req,res) {
	// Web Socket
	var winston = require('winston');
	var io = require('socket.io').listen(server);
	io.sockets.on('connection',function(socket){  
	  socket.on('send message',function(data){
	  	req.models.Messages.create([
		    {
		        message: data.message,
		        username: data.username,
		        username_id: data.username_id,
		    }
		], function (err, items) {
		   
		});
		winston.level = 'debug';
		winston.log('debug', 'Username:'+data.username+ ' Message: '+data.message);
	    io.sockets.emit('new message',data);
	  });
	});
}