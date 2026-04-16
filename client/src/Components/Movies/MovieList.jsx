import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import styles from "./Movie.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const token = localStorage.getItem("token");

  // 🔥 Fetch user movies
  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/movies/getMovies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setMovies(data.movies);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Movies</h2>

      {/* 🔥 FIX: pass refreshMovies */}
      <AddMovie refreshMovies={fetchMovies} />

      {/* 🔥 Movie List */}
      {movies.length === 0 ? (
        <p className={styles.empty}>No Movies Found</p>
      ) : (
        <div className={styles.grid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              refreshMovies={fetchMovies}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;