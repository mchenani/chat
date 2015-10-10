module.exports = function (app,server) {
	app.get('/', function (req, res) {
		var respond = require('../controllers/index');
		respond(app,server,req,res);
	});
	app.get('/socket.io', function (req, res) {
		var respond = require('../controllers/chat');
		respond(app,server,req,res);
	});
}