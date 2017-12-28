var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST title,content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

 var Post = mongoose.model("Post", postSchema);

//USER- email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]    //it has to be the schema name
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email:"hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title:"how to love ron wiesley",
//     content: "Go to Sex ED class!"
// });

// newUser.save(function(err, user){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })

// var newUser = new User({
//     email:"charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){  //after finding the data, it is stored in user variable in this function.
    if(err){
        console.log(err);
    } else {
        user.posts.push({                                       // then the new information is pushed into the posts array of user.
            title: "3  things i love",
            content: "pussy, pussy and pussy"
        });
        user.save(function(err, user){                          //after pushing we need to store it in the databas
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});