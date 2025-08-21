import React, { useState } from "react";
import ProjectCard from "../../Components/Card";
import ProjectModal from "../../Components/ProjectModal";
import "../../../../src/pages/Home/styles/Projects.css"; // Asegurate de tener los estilos que te paso más abajo

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Gestor de Libros",
      description:
        " Primera App en React + Spring Boot para gestionar recomendaciones de libros, hecha en la Unsam junto a ms compañeros.",
      cover: "/readapp.png",
      screenshots: [
        "/readapp login.png",
        "/readapp home admin.png",
        "/readapp libros.png",
        "/readapp libro no existe.png",
        "/readapp editar libro.png",
        "/readapp autores gas.png",
        "/readapp autores.png",
        "/readapp editar autor.png",
        "/readapp eliminar autor.png",
      ],

      repoLink: "https://github.com/gasabe/React-ReadApp.git",
    },
    {
      title: "Uberto",
      description: "App en React + Spring Boot para contratar autos",
      cover: "/uberto.png",
      screenshots: [
        "/uberto-demo0.gif",
        "/uberto-demo1.gif",
        "/uberto-demo2.gif",
        "/uberto-demo3.gif",
      ],
      repoLink: "https://github.com/gasabe/Frontend-Uberto-2025.git",
    },
    {
      title: "MerenApp",
      description:
        "App en React + Spring Boot para gestionar donaciones a comedores",
      cover: "/merendapp.jpg",
      screenshots: ["/merendapp.jpg", "/merendapp-2.jpg"],
      repoLink: "https://github.com/Unsam-LosPerris/MerendApp-Front.git",
    },
    {
      title: "Taller",
      description: "App en React para gestionar un taller mecánico",
      cover: "/taller.jpg",
      screenshots: ["/taller.jpg", "/taller-2.jpg"],
      repoLink: "https://taller-mecanico-the-friends.netlify.app/",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="home-title">Proyectos</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.cover}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
