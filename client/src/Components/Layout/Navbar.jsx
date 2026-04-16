import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className={styles.navbar}>
      {/* 🔥 Logo */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        🎬 PrimeTrade
      </div>

      {/* 🔥 Links */}
      <div className={styles.links}>
        <button onClick={() => navigate("/dashboard")}>
          Movies
        </button>

        {role === "admin" && (
          <button onClick={() => navigate("/admin")}>
            Admin
          </button>
        )}

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;