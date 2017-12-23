var express = require("express");
var app = express();

app.get("/", function(req, res){
    console.log("INSIDE HOME PAGE!!");
    res.send("hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    console.log(req);
    var animal = req.params.animal;
    if (animal === "pig") {
        res.send("The " + animal + " says Oink");
    } 
    
    if (animal === "cow") {
        res.send("The " + animal + " says Moo");
    } 
    
    if (animal === "dog") {
        res.send("The " + animal + " says Woof Woof!");
    } 
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var s = " ";
    for(var i = 0; i < number; i++){
        s += word + " ";
    }
    res.send(s);
    console.log(s);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){  
    console.log("server has started");
});  