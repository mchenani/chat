module.exports = function (app) {
	var orm = require('orm');
	var Messages = require('../models/Messages');	
	app.use(orm.express("mysql://root:root@localhost/chat", {
	    define: function (db, models) {
	        Messages(db,models);
	    }
	}));
}