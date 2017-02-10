var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app, jsonParser) {

    app.get('/api/person/:id', function(req,res) {
        // save to the database
    });

    app.delete('/api/person/:id', function(req,res) {
        // delete to the database
    });

    app.post('/api/person/:id', function(req, res){
        // save to the database
    });
}