var express = require("express");
var app = express();

app.use(express.static("public")); //this tells express to serve the contents of the public directory.
app.set("view engine", "ejs");  //we dont have to add .ejs extension aftewr every file name if we use this.s
app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){  
   var thing = req.params.thing;
   res.render("love", {thingVar: thing});  //by default the res.render looks for the content specified(home.ejs) inside the views folder to execute.
});

app.get("/posts", function(req, res){
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Puppiessss", author: "Manbir" },
        { title: "Tattiesssss", author: "Sahib" }
        ];
        
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!!");
});
