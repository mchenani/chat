module.exports = function (app) {

	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/chat');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
		console.log('Database Connected');
	});
	var models = {};
	models.MessagesModel = mongoose.model('Messages',mongoose.Schema(require('../models/Messages')()));
	models.UsersModel = mongoose.model('Users', mongoose.Schema(require('../models/Users')()));
	
	return models;
}