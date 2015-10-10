module.exports = function () {
	var orm = require('orm');
	var db = orm.connect('mysql://root:root@localhost/chat',function(err,db){
		if (err) throw err;
		var Messages = db.define('messages', {
			message : String,
			username: String
		});
		
    });
	return db;
}