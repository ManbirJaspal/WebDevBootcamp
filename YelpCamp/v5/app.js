var express             = require("express"),
     app                = express(),
     bodyParser         = require("body-parser"),x
     mongoose           = require("mongoose"),
     Campground         = require("./models/campground"),
     Comment            = require("./models/comment"),
     seedDB             = require("./seeds");
     
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg" ,
//         description: "This is a huge granite hill, no bathrooms, you get hookers here for 10$ !!"
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ")
//             console.log(campground);
//         }
//     })


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res){
   
        //get all the campgrounds from the DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log("error!!!" + err);
            } else {
                res.render("campgrounds/index", {campgrounds:allCampgrounds});
            }
        });
        
});

//CREATE - add new campground to DB 
app.post("/campgrounds", function(req, res){
      //get data from the form and add to campgrpunds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    //Create  a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
             //redirect to campgronund page
            res.redirect("/campgrounds");
        }
    });
   
});
 //NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
  
    res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           console.log(foundCampground);
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
   
});

// =================
// COMMENTS ROUTES
// =================


app.get("/campgrounds/:id/comments/new", function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {campground: campground});
        }
    })
});

app.post("/campgrounds/:id/comments", function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               campground.comments.push(comment);
               campground.save();
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
   //create new comment
   //connect new comment to campground
   //redirect campground show page
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});