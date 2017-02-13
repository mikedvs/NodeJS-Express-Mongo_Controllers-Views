var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');

var port = process.env.PORT || 3000;

app.use('/dist', express.static(__dirname + '/dist'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);

    /* MySQL */

    var con = mysql.createConnection({
            host: 'localhost',
            user: 'test',
            password: 'test',
            database: 'addressbook'
        });
        
    /* CUT and PASTE SQL CODE*/

    con.query(
        '', function(err, rows) {
            if(err) throw err;
            console.log(rows[0].Firstname);
        }
    );

    next();
});



/* Route Controllers: */
htmlController(app);
apiController(app);

app.listen(port);