
var friends = require("../data/friends");

// ROUTING

module.exports = function (app) {
    // API GET Requests
    
    app.get("/api/testfriends", function (req, res) {
        // view all the friends
        res.json(friends);
    });

    // API POST Requests
    
    app.post("/api/testfriends", function (req, res) {
       
        let bestMatch = {
            name: "",
            photo: "",
            //  track the difference between the answers to question values
            friendDifference: 1000
        };
        console.log(req.body);
       
        let surveyData = req.body;
        let surveyScores = surveyData.scores;
        // calculate the difference between each user
        let totalDifference = 0;
        // nested for loop
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
            // current friend scores
            for (var s = 0; s < friends[i].scores[s]; s++) {
                totalDifference += Math.abs(parseInt(surveyScores[s]) - parseInt(friends[i].scores[s]));

                // compare current index to index
            }
                    if (totalDifference <= bestMatch.friendDifference) {
                        bestMatch.name = friends[i].name;
                        bestMatch.photo = friends[i].photo;
                        bestMatch.friendDifference = totalDifference;
                    }
        }
        // this pushes the Data to the friends
        friends.push(surveyData);
        res.json(bestMatch);
    });
};
