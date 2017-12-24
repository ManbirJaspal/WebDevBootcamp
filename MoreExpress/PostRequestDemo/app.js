var express = require("express");
var app = express();
var bodyParser = require("body-parser"); //we installed the body-parser to get the data in the body.

app.use(bodyParser.urlencoded({extended: true})); // body-parser will take the request body And parse it into a javascript object that we c
//an use and access.
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Joey", "Monica", "Ross"];

app.get("/", function(req, res){
   res.render("home"); 
});
    
app.post("/addfriend", function(req, res){     //Post request
    var newfriend = (req.body.newfriend);      //retrieving the value entered by user into a variable
    friends.push(newfriend);                    //piushing new friend into the array
   res.redirect("/friends");                    //redirects the page to /friends and shows the result
});
    
app.get("/friends", function(req, res){
   res.render("friends", {friends: friends}); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has Started!!!"); 
});