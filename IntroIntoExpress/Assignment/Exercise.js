var express = require("express");
var app = express();

app.get("/", function(req, res){
    console.log("INSIDE HOME PAGE!!");
    res.send("hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "...."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
        res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = parseInt(req.params.number);
    var s = " ";
    for(var i = 0; i < number; i++){
        s += word + " ";
    }
    res.send(s);
    
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){  
    console.log("server has started");
});  