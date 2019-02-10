// Dependencies 
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Set up Express
var app = express();
var PORT = process.env.PORT || 8080;

// Access CSS files
// app.use(express.static ('app'));
// app.use(express.static(path.join(__dirname, '/app')));

// Middleware for parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routing
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// Listen to PORT
app.listen(PORT, function() {
    console.log("Friend Finder app is listening on PORT: " + PORT);
});