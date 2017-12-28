var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
    posts: [                //here its an array of object ids
        {
            type: mongoose.Schema.Types.ObjectId, //syntax of mongoose object id
            ref: Post                               // belonging to a post
        }
    ]
});
var User = mongoose.model("User", userSchema);

// Post.create({
//   title: "How to cook the best burger pt. 3",
//   content: "AKLSJDLAKSJD"
// }, function(err, post){
//     User.findOne({email: "manb@gamil.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

User.findOne({email: "manb@gamil.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
