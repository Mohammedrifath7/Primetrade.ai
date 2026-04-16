import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import AdminDashboard from "../Components/Admin/AdminDashboard";

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      alert("Access denied");
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <AdminDashboard />
    </Layout>
  );
};

export default AdminPage;