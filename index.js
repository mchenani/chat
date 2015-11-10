var express = require('express');
var app = express();
var path = require('path');
var swig = require('swig');
var url = require('url');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server Listening at http://127.0.0.1:'+port);
});

var connection = require('./config/db')
var models = connection(app);

var routes = require('./config/routes');
routes(app,server,models);


