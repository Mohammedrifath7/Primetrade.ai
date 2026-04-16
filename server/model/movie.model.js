const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    imdbID : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    poster : {
        type : String,
        required : true
    },
    rating :{
        type : Number,
        min : 1,
        max : 10
    },
    review : {
        type : String,
        required : true
    }
} ,{timestamps : true});

const Movies = mongoose.model("Movies",MovieSchema);

module.exports = Movies;