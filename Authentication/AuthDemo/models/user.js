var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
   usernamme: String,
   password: String
});

UserSchema.plugin(passportLocalMongoose); //it will take the passportLocal Package that we installed and required. and its going to add the methods that come with the package and add it to UserSchema

module.exports = mongoose.model("User", UserSchema);