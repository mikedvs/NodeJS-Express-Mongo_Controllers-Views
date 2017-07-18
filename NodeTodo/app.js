var express = require('express');
var app = require('app');

var port = process.env.PORT || 3000;

app.use('/assets', express,static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);