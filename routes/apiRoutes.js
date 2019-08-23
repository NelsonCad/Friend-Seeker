let friendsData = require("./Data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        let comparison = { name: "nobody", similarity: 40 };

        for (f = 0; f < friendsData.friends.length; f++) {

            let likability = 0;

            for (i = 0; i < friendsData.friends[f].scores.length; i++) {
                let friendscore = parseInt(friendsData.friends[f].scores[i]);
                let userscore = parseInt(req.body.scores[i]);

                let similarity = friendscore - userscore;

                likability += similarity;
            };

            if (likability < comparison.likability) {
                newBestFriend = friendsData.friends[f];
                comparison = {name: friendsData.friends[f].name, similarity: likability};
            };
            
        };

        friendsData.friends.push(req.body);
        res.json(comparison.name);
    });


};