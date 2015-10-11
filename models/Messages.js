module.exports = function (db,models) {
	models.Messages = db.define("messages",{
		message : String,
		username: String
	});
}