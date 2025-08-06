import React from "react";
import "../styles/Home.css";
import ProjectCard from "../../Components/Card";
import ubertoPic from "../../../../public/uberto.png";

export default function Projects() {
  return (
    <section className="home-container">
        <h2 className="home-title">Proyectos</h2>
      <div className="home-card-container">
        <ProjectCard
          title="Gestor de Libros"
          description="App en React + Spring Boot para gestionar recomendaciones de libros"
          image="https://raw.githubusercontent.com/algo3-unsam/readapp-2024-grupo-7/refs/heads/main/public/assets/loginFondo.png?token=GHSAT0AAAAAADHE3RTHBOWW2FXTLOGGS6QS2ETNPQQ"
          repoLink="https://github.com/gasabe/React-ReadApp.git"
        />
        <ProjectCard
          title="Uberto"
          description="App en React + Spring Boot para gestionar recomendaciones de contratar un autos"
          image={ubertoPic}
          repoLink="https://github.com/gasabe/Frontend-Uberto-2025.git"
        />
        <ProjectCard
          title="MerenApp"
          description="App en React + Spring Boot para gestionar donaciones a comedores"
          image="https://avatars.githubusercontent.com/u/205374845?"
          repoLink="https://github.com/Unsam-LosPerris/MerendApp-Front.git"
        />
      </div>
    </section>
  );
}
