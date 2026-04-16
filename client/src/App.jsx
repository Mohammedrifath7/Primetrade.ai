import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";

import Dashboard from "./pages/Dashboard";
import AdminPage from "./pages/AdminPage";

// 🔥 Protect user routes
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

// 🔥 Protect admin routes
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "admin" ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* 🔥 Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 👤 User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* 👑 Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />

        {/* ❌ Fallback */}
        <Route path="*" element={<h2>404 Not Found</h2>} />

      </Routes>
    </Router>
  );
}

export default App;