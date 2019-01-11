var express = require("express");
var app = express();


var port = 3000

var path = require("path");

//app.get("/home", function(req, res){

//})
app.get("/home", function(req, res){
  res.sendFile(path.join(__dirname,"index.html"));
});


app.get("/welcome", function(req, res){
  res.send("welcome to my home page")
})
var friends = {
  name: "sam",
  students: true,
  languages: ["js", "node", "express", "sql"],
  friend: 10
};

app.get("/friends", function(req, res){
  res.json(friends);
});



app.listen(port, function(){
  console.log("we are listening for incomming requests");
});