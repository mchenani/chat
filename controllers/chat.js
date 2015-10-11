
module.exports = function (server,req,res) {
	// Web Socket
	var io = require('socket.io').listen(server);
	io.sockets.on('connection',function(socket){  
	  socket.on('send message',function(data){
	  	req.models.Messages.create([
		    {
		        message: data,
		        username: "Test",
		    }
		], function (err, items) {
		   
		});
	  	console.log('Message: '+data);
	    io.sockets.emit('new message',data);
	  });
	});
}