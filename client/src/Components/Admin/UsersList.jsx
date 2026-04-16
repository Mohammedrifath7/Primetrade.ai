import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css"; // ✅ reuse same CSS

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Users</h2>

      {loading ? (
        <p className={styles.empty}>Loading...</p>
      ) : users.length === 0 ? (
        <p className={styles.empty}>No Users Found</p>
      ) : (
        <div className={styles.grid}>
          {users.map((user) => (
            <div key={user._id} className={styles.userCard}>
              <p className={styles.email}>{user.email}</p>
              <p className={styles.role}>{user.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;