const axios = require("axios");
const wallpaper = require("wallpaper");
const download = require("download-file");
let url;
let options = {
  filename: "dog.jpg",
};

axios
  .get("http://localhost:3000/random")
  .then(function (response) {
    url = response.data.message;
    download(url, options);
    wallpaper.set("./dog.jpg");
  })
  .catch(function (err) {
    console.log(err);
  });