// Dependencies 
var path = require('path');

// Get friend data
var friendMatch = require('../data/friends.js');

// API routes
module.exports = function(app) {

    // List of friend entries
    app.get('/api/friends', function(req, res) {
        res.json(friendMatch);
    });

    // Add a new friend entry
    app.post('/api/friends', function(req, res) {

        // User input object
        var userInput = req.body;
        for(var i=0; i < userInput.scores.length; i++) {
            if (userInput.scores[i] == "1 (Yes)") {
                userInput.scores[i] = 1;
            } 
            else if (userInput.scores[i] == "3 (No)") {
                userInput.scores[i] = 3;
            } else {
                userInput.scores[i] = parseInt(userInput.scores[i]);
            }
        }

// Setting up comparison array to calc total difference and find best friend match
        var compArray = [];
        for (var i = 0; i < friendMatch.length; i++) {
            var calcFriend = friendMatch[i];
            var td = 0;

            for(var m = 0; m < calcFriend.scores.length; m++) {
                // Get absolute value of the number
                var tempDif = Math.abs(calcFriend.scores[m] - userInput.scores[m]);
                td += tempDif;
            }

            compArray[i] = td;

        }

        var bfComp = compArray[0];
        var bF = 0;

        for(var i = 1; i < compArray.length; i++) {
            if(compArray[i] < bfComp) {
                bfComp = compArray[i];
                bF = i;
            }
        }

        // Push new friends into the database
        friendMatch.push(userInput);
        res.json(friendMatch[bF]);
    });
};