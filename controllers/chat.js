
module.exports = function (app,server,req,res) {
	// Web Socket
	var io = require('socket.io').listen(server);
	io.sockets.on('connection',function(socket){  
	  socket.on('send message',function(data){

	  	// req.models.Messages.find({ id: "5" }, function (err, data) {
	   //      console.log("People found: %d", data.length);
	   //      console.log('Message'+data[0].message)
	   //      // people[0].save(function (err) {
	   //      //     // err.msg = "under-age";
	   //      // });
	   //  });

	    // db.query("INSERT INTO messages (message,username) VALUES ('"+data+"','1')", function(err, rows, fields) {
	    //   if (err) throw err;      
	    // });
	  	console.log('Message: '+data);
	    io.sockets.emit('new message',data);
	  });
	});
}