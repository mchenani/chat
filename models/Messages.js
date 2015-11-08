module.exports = function (mangoose) {
	return mongoose.Schema({
	    message : String,
		user_id: Number,		
	});
}
