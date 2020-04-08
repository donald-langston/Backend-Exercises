const express = require('express');
const app = express();
const fs = require('fs');

app.get('/random', function(req, res) {
    fs.readdir("public", function(err, files) {
        if(err) {
            console.log(err);
            return;
        }
        // files.length + 1 returns a random number between 0 and length of files array
        var randomIndex = Math.floor(Math.random() * (files.length + 1));
        var image = files[randomIndex];
        res.json({
            status: "ok",
            message: `http://localhost:3000/${image}`
        })
    });
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Server started on port 3000");
});