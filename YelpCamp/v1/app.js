var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

 var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8041/7930201874_6c17ed670a.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8041/7930201874_6c17ed670a.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8041/7930201874_6c17ed670a.jpg"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
   
        
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
      //get data from the form and add to campgrpunds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect to campgronf page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  
    res.render("new.ejs");
});
        

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("YelpCamp has started!!");
});