import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/screens/Login";
import About from "../src/pages/Home/pages/About";
import Experience from "../src/pages/Home/pages/Experience";
import Projects from "../src/pages/Home/pages/Projects";
import Contact from "../src/pages/Home/pages/Contact";

const isLoggedIn = localStorage.getItem("loggedIn") === "true";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Siempre arrancar en login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Login SIN redirigir automáticamente */}
      <Route path="/login" element={<Login />} />

      {/* Home protegido */}
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
      >
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Ruta fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
