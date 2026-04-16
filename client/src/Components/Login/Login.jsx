import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,  
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:5000/api/signin", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : formData.email,
          password : formData.password,
        }),
      });

      const data = await res.json();

      if(res.ok){
        localStorage.setItem("token" , data.token);
        localStorage.setItem("role", data.user.role);

        alert("Login successful");
        if (data.user.role === "admin") {
             navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else{
        alert(data.message)
      }

      
    } catch(err){
        console.error(err); // ✅ FIX 4
        alert("Something went wrong");
    }



  };

  return (
    <div className={styles["auth-bg"]}>
      <div className={styles["auth-card"]}>
        
        {/* Logo */}
        <div className={styles["logo"]}>
          <div className={styles["logo-icon"]}>P</div>
          <div>
            <h1>PrimeTrade<span>AI</span></h1>
            <p>Movies</p>
          </div>
        </div>

        <h2 className={styles["auth-title"]}>Login</h2>

        <form onSubmit={handleSubmit}>

          <div className={styles["login-email"]}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>


          <button type="submit" >Login</button>
        </form>

        <p className={styles["auth-footer"]}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
