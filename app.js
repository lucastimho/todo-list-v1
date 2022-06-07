const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var item = [];

app.get("/", function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItem})
})

app.post("/", function(req, res) {
    item.push(req.body.newItem);

    res.redirect("/")
})
app.listen(3000, function() {
    console.log("Server is running on port 3000");
})