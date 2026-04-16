const express = require('express');

const movieRouter = express.Router();
const verifyToken = require("../middleware/middleware");


const mongoose  = require('mongoose');
const Movies = require('../model/movie.model');
const User = require('../model/schema');


movieRouter.post("/add" , verifyToken,async(req,res)=>{
    try{
        const {imdbID,title,poster,rating,review} = req.body;
        if(!imdbID || !title || !poster){
            return res.status(400).json({message : "Required Fields are missing"});
        }
        const newMovie = new Movies({
            userId : req.user._id,
            imdbID,
            title,
            poster,
            rating,
            review 
        });
        
        await newMovie.save();
        return res.status(201).json({
            success : true,
            message : "Movie added successfully",
            data : newMovie
        });
        

    } catch(err){
        res.status(500).json({ message: err.message });
    }
})

movieRouter.get("/getMovies" , verifyToken,async(req,res) =>{
    try{
        const userId = req.user._id;
        
        const movies = await Movies.find({userId});

        return res.status(200).json({movies});
    } catch(err){
        return res.status(500).json({message : err.message});
    }
})

movieRouter.put("/updateMovies/:id" , verifyToken , async(req,res) =>{
    try{
        const movieId = req.params.id;
        
        const {review,rating} = req.body;
        const movie = await Movies.findById(movieId);
        const userId = req.user._id;

        if (!movie) {
           return res.status(404).json({ message: "Movie not found" });
        }

        if (movie.userId.toString() !== userId.toString()) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        
        if(rating !== undefined) movie.rating = rating;
        if(review !== undefined) movie.review = review;

        await movie.save();
        return res.status(200).json({message : "Updated Succesfully!"});
    } catch(err){
        return res.status(500).json({message : err.message});
    }
})

movieRouter.delete("/deleteMovie/:id",verifyToken , async(req,res) =>{
    try{
        const movieId = req.params.id;
        const movie = await Movies.findById(movieId);

        const userId = req.user._id;

        if (!movie) {
           return res.status(404).json({ message: "Movie not found" });
        }

        if (movie.userId.toString() !== userId.toString()) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await Movies.findByIdAndDelete(movieId);
        return res.status(200).json({message : "Deleted Succesfully!"});
    } catch(err){
        return res.status(500).json({message : err.message});
    }
})




movieRouter.get("/users" , verifyToken ,async(req,res) =>{
    try{
        
        const user = req.user;
        if(user.role !== "admin"){
            return res.status(403).json({message : "Unauthorized"});
        }
        const users = await User.find();
        return res.status(200).json({users});
    } catch(err){
        return res.status(500).json({message : err.message});
    }
})




movieRouter.get("/all" , verifyToken ,async(req,res) =>{
    try{
        
        const user = req.user;

        if(user.role !== "admin"){
            return res.status(403).json({message : "Access Denied"});
        }

        const movies = await Movies.find();
        return res.status(200).json({movies});
        
    } catch(err){
        return res.status(500).json({message : err.message});
    }
})



module.exports = movieRouter;