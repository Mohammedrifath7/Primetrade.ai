import React, { useState } from "react";
import EditMovie from "./EditMovie";
import styles from "./Movie.module.css"; // ✅ added

const MovieCard = ({ movie, refreshMovies }) => {
  const [showEdit, setShowEdit] = useState(false);

  const token = localStorage.getItem("token");

  // 🔥 Delete movie
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/movies/deleteMovie/${movie._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Movie deleted");
        refreshMovies();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.card}>
      {/* 🎬 Poster */}
      <img
        src={
          movie.poster !== "N/A"
            ? movie.poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.title}
        className={styles.poster}
      />

      {/* 🎞 Title */}
      <p className={styles.movieTitle}>{movie.title}</p>

      {/* ⭐ Rating */}
      <p className={styles.rating}>⭐ {movie.rating || "N/A"}</p>

      {/* 📝 Review */}
      <p className={styles.review}>
        {movie.review || "No review"}
      </p>

      {/* 🔘 Buttons */}
      <div className={styles.actions}>
        <button
          className={styles.editBtn}
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>

        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

      {/* ✏ Edit Component */}
      {showEdit && (
        <EditMovie
          movie={movie}
          onClose={() => setShowEdit(false)}
          refreshMovies={refreshMovies}
        />
      )}
    </div>
  );
};

export default MovieCard;