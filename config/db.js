module.exports = function (app) {
	// var orm = require('orm');
	// var Messages = require('../models/Messages');	
	// app.use(orm.express("mysql://root:root@localhost/chat", {
	//     define: function (db, models) {
	//         Messages(db,models);
	//     }
	// }));

	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/chat');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		console.log('Database Connected');
	});
	
	var Messages = mongoose.Schema({
	    message : String,
		user_id: Number,		
	});;
	
	// var newMessage = new Messages({ message: 'fluffy',user_id:10 });

	models.Messages = mongoose.model('Messages', Messages);

	newMessage = new models.Messages({ message: 'fluffy',user_id:10 });
	newMessage.save(function (err, fluffy) {
	  if (err) return console.error(err);
	});
}