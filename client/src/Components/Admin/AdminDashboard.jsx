import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);

  const token = localStorage.getItem("token");

  // 🔥 Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/movies/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setUsers(data.users);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Fetch all movies
  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/movies/all", {
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
    fetchUsers();
    fetchMovies();
  }, []);

  return (
  <div className={styles.container}>
    <h2 className={styles.title}>Admin Dashboard</h2>

    {/* 🔥 Users Section */}
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Users</h3>

      {users.length === 0 ? (
        <p className={styles.empty}>No Users Found</p>
      ) : (
        <div className={styles.grid}>
          {users.map((user) => (
            <div className={styles.userCard} key={user._id}>
              <p className={styles.email}>{user.email}</p>
              <p className={styles.role}>{user.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* 🔥 Movies Section */}
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Movies</h3>

      {movies.length === 0 ? (
        <p className={styles.empty}>No Movies Found</p>
      ) : (
        <div className={styles.grid}>
          {movies.map((movie) => (
            <div className={styles.card} key={movie._id}>
              
              {/* 🎬 Poster */}
              <img
                src={movie.poster}
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

              {/* 👤 User */}
              <p className={styles.userInfo}>
                User: {movie.userId}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
};

export default AdminDashboard;