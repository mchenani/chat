var express = require('express');
var app = express();
var path = require('path');
var swig = require('swig');
var url = require('url');
var routes = require('./config/routes');
var connection = require('./config/db')

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server Listening at http://127.0.0.1:'+port);
});
connection(app);
routes(app,server);


