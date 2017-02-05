var express = require('express');
var app = express();

var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');

var port = process.env.PORT || 3000;

app.use('/dist', express.static(__dirname + '/dist'));

app.set('view engine', 'ejs');

htmlController(app);
apiController(app, jsonParser);

app.listen(port);