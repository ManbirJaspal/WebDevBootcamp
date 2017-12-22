var express = require("express");
var app = express();

// "/" => "Hi there!"
// using get request

app.get("/", function(req, res){   //req and res are objects
    res.send("Hi There!");  //send the response back
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!"); 
});

// "/cat" => "MEOW!"
app.get("/cat", function(req, res){
    console.log("Someone made a request to /cat");
   res.send("MEOW!"); 
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){  //the process.env.PORT
//is like port 3000 for normal http request. but since its cloud9 this is the
//way of doing it
    console.log("server has started");
});  