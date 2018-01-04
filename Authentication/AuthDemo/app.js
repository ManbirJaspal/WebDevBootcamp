var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStratergy        = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");
    
mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "I like Butter Chicken",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize()); // These two lines are important if you want to use passport
app.use(passport.session());    //

passport.serializeUser(User.serializeUser()); //encoding that data and putting it back into the session is the job for the serializer.
passport.deserializeUser(User.deserializeUser()); // respomsible for reading the session, taking the data from the session thats encoded. and un-encoding it. thats the work of deserializer

//=============
//ROUTES
//=============
app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret", function(req, res){
   res.render("secret"); 
});

//=====================
//AUTHENTICATION ROUTES
//=====================

//show sign up form
app.get("/register", function(req, res){
   res.render("register"); 
});
//handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
        });
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started....!!"); 
});