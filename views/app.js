const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

console.log(date);

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express().static("public"))

app.set('view engine', 'ejs');

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res) {
    
    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items})
})

app.post("/", function(req, res) {
    items.push(req.body.newItem);

    res.redirect("/")
})

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
    } else {
        items.push(item);
        res.redirect("/work");
    }
})
app.listen(3000, function() {
    console.log("Server is running on port 3000");
})