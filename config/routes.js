module.exports = function (app,server,models) {
	app.get('/', function (req, res) {
		var respond = require('../controllers/index');		
		respond(req,res,models);
	});
	app.get('/socket.io', function (req, res) {
		var respond = require('../controllers/chat');
		respond(server,req,res,models);
	});
	app.post('/register', function (req, res) {
		var respond = require('../controllers/register');		
		respond(server,req,res,models);
	});
}