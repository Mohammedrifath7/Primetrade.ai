import React, { useState, useEffect } from "react";
import styles from "./Movie.module.css"; // ✅ added

const EditMovie = ({ movie, onClose, refreshMovies }) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const token = localStorage.getItem("token");

  // 🔥 Pre-fill existing data
  useEffect(() => {
    if (movie) {
      setRating(movie.rating || "");
      setReview(movie.review || "");
    }
  }, [movie]);

  // 🔥 Update API call
  const handleUpdate = async () => {
    // ✅ FIX 1: validation
    if (!rating) {
      alert("Rating is required");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/movies/updateMovies/${movie._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating,
            review,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Movie updated successfully");
        refreshMovies(); 
        onClose(); 
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!movie) return null;

  return (
    <div className={styles.form}> {/* ✅ FIX 2: apply CSS */}
      <h3>Edit Movie</h3>

      <p>{movie.title}</p>

      <input
        type="number"
        placeholder="Rating (1-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <textarea
        placeholder="Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditMovie;