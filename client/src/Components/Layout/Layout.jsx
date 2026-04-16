import React from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;