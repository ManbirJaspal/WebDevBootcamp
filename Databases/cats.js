var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catScehma = new mongoose.Schema({  //this tells mongoose(the js side of things) that i want to add casts to our DB and a cat should be define acc. to these objects
   name: String,                        // its the pattern how cats should be added. so every cat should have name, age and temperament
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catScehma); // we took the cat Schema and we compiled it into a model and we saved that into a Cat variable.
//we have created a Cat object ( the way you create an object for a class in java to access it)

//adding a new cat to DB

// var george = new Cat({
//     name: "fuck you",
//     age: 7,
//     temperament: "evil"
// });

// george.save(function(err, cat){    //george.save is saving the the cat "george" in the DB. we call the function when the george.save is done
//     if(err){
//         console.log("Something went wrong!!!");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "lancealot",
    age: 25,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log("ERROR!");
    } else {
        console.log(cat);
    }
})

//retrieve all cats 

Cat.find({}, function(err,cats){
    if(err){
        console.log("ERROR!!");
        console.log(err);
    } else {
        console.log("All the cats.....");
        console.log(cats);
    }
});

