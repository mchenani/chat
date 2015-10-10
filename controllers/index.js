module.exports = function (app,server,req,res) {
	var respond = {title:"title"};
	res.render('index', respond);
}