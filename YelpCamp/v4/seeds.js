var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "BLAH BLAH BLAH"
    },
    {
        name: "Desert Mesa",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "BLAH BLAH BLAH"
    },
    {
        name: "Canyon Floor",
        image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
        description: "BLAH BLAH BLAH"
    },
    ]
function seedDB(){
    //Remove all csampgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
            console.log("removed campgrounds!");
                       //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but i wish there was internet",
                                author: "manbir"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created a new comment!");
                                }
                            });
                            
                    }
                });
            });
            
    });
 
}




module.exports = seedDB;