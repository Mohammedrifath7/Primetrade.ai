const mongoose  = require("mongoose");

const UserSchema = mongoose.Schema({
    email : String,
    userName : String,
    password : String,
    role : String
})

const User = mongoose.model("User",UserSchema);

module.exports = User;