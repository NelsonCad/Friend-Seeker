let friendsData = require("./Data/friends");
let comparison = { name: "nobody", similarity: 40 };

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        for (f = 0; f < friendsData.friends.length; f++) {

            let likability = 0;

            for (i = 0; i < friendsData.friends[f].scores.length; i++) {
                let friendscore = parseInt(friendsData.friends[f].scores[i]);
                let userscore = parseInt(req.body.scores[i]);

                let similarity = friendscore - userscore;

                likability += similarity;
            };

            console.log("likability of " + friendsData.friends[f].name + " is " + likability);

            if (likability < comparison.similarity) {
                comparison = {name: friendsData.friends[f].name, similarity: likability};
            };
            
        };

        friendsData.friends.push(req.body);
        res.json(comparison);
    });
};