const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("<h1>Yay it's the weekend!</h1>");
    } else {
        res.send("<h1>Boo! Work.</h1>");
    }
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})