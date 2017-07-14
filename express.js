var express = require('express');
var app = express();
var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');
var mongoose = require('mongoose');

mongoose.Promise = require('q').Promise;

/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://mikedvs:whiskey2@ds017672.mlab.com:17672/addressbook';
 
/*==============================================================

    REMOVING MONOGODB CONNECTION DUE TO FIREWALL TIMEOUT

================================================================*/

 
/*mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});*/


var port = process.env.PORT || 3000;

// HTML and API Controllers
htmlController(app);
apiController(app);

app.use('/dist', express.static(__dirname + '/dist'));

app.set('view engine', 'ejs');

var Schema = mongoose.Schema;

// set up new schema for person object
var personSchema = new Schema({
    firstname: String,
    lastname:String,
    address: String
});

// declare new schema for Person object
var Person = mongoose.model('Person', personSchema);

// Create first user
var mike = Person({
    firstname: 'Mike',
    lastname: 'Maliniak',
    address: '128 Marine Parade'
});

mike.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

// Create Second user
var kat = Person({
    firstname: 'Katherine',
    lastname: 'Biggs',
    address: '128 Marine Parade'
});

kat.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

// Mongoose console function

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);

    // get all the users
    Person.find({}, function(err, users){
        if (err) throw err;

        // object of all the users
        console.log(users);
    });

    next();
});

app.listen(port);