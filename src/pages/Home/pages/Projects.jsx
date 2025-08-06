import React from "react";
import "../styles/Home.css";
import ProjectCard from "../../Components/Card";
import ubertoPic from "../../../../public/uberto.png";
import merendappPic from "../../../../public/merendapp.jpg";
import readappPic from "../../../../public/readapp.png";
import tallerPic from "../../../../public/taller.jpg";

export default function Projects() {
  return (
    <section className="home-container">
      <h2 className="home-title">Proyectos</h2>
      <div className="home-card-container">
        <ProjectCard
          title="Gestor de Libros"
          description="App en React + Spring Boot para gestionar recomendaciones de libros"
          image={readappPic}
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
          image={merendappPic}
          repoLink="https://github.com/Unsam-LosPerris/MerendApp-Front.git"
        />
        <ProjectCard
          title="Taller"
          description="App en React para gestionar un taller mecánico"
          image={tallerPic}
          repoLink="https://taller-mecanico-the-friends.netlify.app/"
        />
      </div>
    </section>
  );
}
