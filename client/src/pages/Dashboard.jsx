import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import MovieList from "../Components/Movies/MovieList";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔥 protect route
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <MovieList />
    </Layout>
  );
};

export default Dashboard;