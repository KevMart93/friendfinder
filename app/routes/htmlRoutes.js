// Dependencies 
var path = require("path");

// HTML routes
module.exports = function(app) {

    // home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../friendfinder/app/public/home.html'));
    });

    // survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../friendfinder/app/public/survey.html'));
    });
};