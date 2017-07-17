var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
	{
		name: 'John Doe'
	},
			{
		name: 'Jim Doe'
	},
			{
		name: 'Jenny Doe'
	},
			{
		name: 'Josh Doe'
	}
];

// set the templating engine as EJS
app.set('view engine', 'ejs');

// set the static assets as the public folder
app.use('/assets', express.static(__dirname + '/public'));

// set route
app.get('/', function(req, res) {
	
	res.render('index', { serverPeople: people });
	
});

// listen on port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})