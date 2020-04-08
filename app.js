const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.get('/random', function(req, res) {
    fs.readdir("public", function(err, files) {
        if(err) {
            console.log(err);
            return;
        }
        
        var randomIndex = Math.floor(Math.random() * (files.length));
        var image = files[randomIndex];
        res.json({
            status: "ok",
            message: `http://localhost:3000/${image}`
        })
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});