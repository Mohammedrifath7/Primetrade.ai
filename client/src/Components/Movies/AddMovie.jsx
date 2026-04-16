import React, { useState } from "react";
import styles from "./Movie.module.css";

const AddMovie = ({ refreshMovies }) => { // ✅ FIX 1: receive prop
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const token = localStorage.getItem("token");

  // 🔥 Search movies from OMDb
  const searchMovies = async () => {
    if (!query) return;

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=689745ea&s=${query}`
      );
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Add movie to backend
  const handleAddMovie = async () => {
    if (!selectedMovie) return;

    if (!rating) {
      alert("Rating is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/movies/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          imdbID: selectedMovie.imdbID,
          title: selectedMovie.Title,
          poster: selectedMovie.Poster,
          rating,
          review,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Movie added successfully");

        refreshMovies(); // 🔥🔥 MAIN FIX

        // reset
        setSelectedMovie(null);
        setRating("");
        setReview("");
        setMovies([]);
        setQuery("");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Movie</h2>

      {/* 🔍 Search */}
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {/* 🎬 Movie Results */}
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className={styles.card}
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
              className={styles.poster}
            />
            <p className={styles.movieTitle}>{movie.Title}</p>
          </div>
        ))}
      </div>

      {/* ✍️ Add Form */}
      {selectedMovie && (
        <div className={styles.form}>
          <h3>{selectedMovie.Title}</h3>

          <input
            type="number"
            placeholder="Rating (1-10)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <textarea
            placeholder="Write review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <button onClick={handleAddMovie}>
            Add Movie
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;