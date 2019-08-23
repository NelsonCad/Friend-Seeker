let friendsData = require("./Data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        let friends = friendsData.friends;
        let newBestFriend;

        let comparison = { name: "nobody", similarity: 40 }

        for (f = 0; f < friends.length; f++) {

            let likability = 0;

            for (i = 0; i < friends.score.length; i++) {
                let similarity = friends.score[i] - req.body.score[i];

                likability += similarity;
            };

            if (likability < comparison.likability) {
                newBestFriend = friends[f];
                comparison = {name: friends[f].name, similarity: likability}
            }
        };

        res.json(newBestFriend)

        friends.push(req.body);
    });
};