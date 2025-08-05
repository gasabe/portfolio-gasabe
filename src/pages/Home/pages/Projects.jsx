import React from 'react';
import "../styles/Home.css"; 

export default function Projects() {
  return (
    <section className="home-container">
      <div className="home-content">
      <h2>Proyectos</h2>
      <ul>
        <li>Sistema de Recomendaciones de Libros (Kotlin + Spring Boot)</li>
        <li>Web para fanáticos del libros ReadApp (Angular + CSS)</li>
        <li>Otros proyectos personales y académicos</li>
      </ul>
      </div>
    </section>
  );
}
