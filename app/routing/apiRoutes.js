var friends = require("../data/friends.js");
var friendsArr = friends.friends; 

module.exports = function (app) {
    // this is a GET route that responds to localhost:3000/api/friends
    app.get("/api/friends", function (request, response) {
        response.json(friendsArr);
    });

    var summedDiffArr = [];
    app.post("/api/friends", function (request, response){
        
        // compare new user results 
        for (var i = 0; i < friendsArr.length; i++) {
            var newFriendScores = request.body.scores;
            var existingFriendScores = friendsArr[i].scores;

            var difference = []; 
            for (let i = 0; i < newFriendScores.length; i++) {
                difference.push(Math.abs(newFriendScores[i] - existingFriendScores[i]));
            }
            
            var summedDifference = difference.reduce(add, 0);
            function add (a, b) {
                return a + b;
            }

            summedDiffArr.push(summedDifference);
        }
        console.log(summedDiffArr);
        var closestMatch = Math.min(...summedDiffArr);
        console.log(closestMatch);

        var trueMatch = summedDiffArr.indexOf(closestMatch);
        console.log(trueMatch);
        
        // sending true match to modal
        response.json(friendsArr[trueMatch]);
        console.log(friendsArr[trueMatch]);

        // sending new friend to friends array
        friendsArr.push(request.body);  

    });
};