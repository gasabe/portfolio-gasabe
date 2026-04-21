import React, { useState } from "react";
import ProjectCard from "../../Components/Card";
import ProjectModal from "../../Components/ProjectModal";
import "../../../../src/pages/Home/styles/Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Portfolio GitVLG",
      description:
        "Versión adicional de mi portfolio profesional con presentación de proyectos y perfil orientado a desarrollo frontend.",
      cover: "/project-generic.jpg",
      screenshots: ["/project-generic.jpg"],
      repoLink: "https://github.com/gasabe/portfolio-gasabe",
      demoLink: "https://gasabe.gitvlg.com/",
    },
    {
      title: "Portfolio Personal",
      description:
        "Portfolio personal donde muestro mis proyectos, stack tecnológico y forma de trabajo, incluyendo buenas prácticas de desarrollo y uso de Git.",
      cover: "/project-generic.jpg",
      screenshots: ["/project-generic.jpg"],
      repoLink: "https://github.com/gasabe/portfolio-gasabe",
      demoLink: "https://portfolio-gasabe.netlify.app/",
    },
    {
      title: "MerenApp",
      description:
        "App en React + Spring Boot para gestionar donaciones a comedores.",
      cover: "/merendapp.jpg",
      screenshots: ["/merendapp.jpg", "/merendapp-2.jpg"],
      repoLink: "https://github.com/Unsam-LosPerris/MerendApp-Front.git",
      demoLink: "",
    },
    {
      title: "Estudio Álvarez",
      description:
        "Sitio web desarrollado para un estudio jurídico, con foco en diseño claro, presencia profesional y experiencia de usuario.",
      cover: "/project-generic.jpg",
      screenshots: ["/project-generic.jpg"],
      repoLink: "https://github.com/gasabe/estudio",
      demoLink: "https://estudio-alvarez.netlify.app/",
    },
    {
      title: "NASA Explorer App",
      description:
        "SPA desarrollada en React para explorar contenido de la NASA consumiendo APIs, con componentes reutilizables, navegación y manejo de estados.",
      cover: "/project-generic.jpg",
      screenshots: ["/project-generic.jpg"],
      repoLink: "https://github.com/gasabe/nasa-explorer",
      demoLink: "https://nasa-explorer-app-spa.netlify.app/",
    },
    {
      title: "DailyTuki",
      description:
        "Aplicación web desarrollada con foco en organización, usabilidad y una interfaz simple y dinámica para el usuario.",
      cover: "/project-generic.jpg",
      screenshots: ["/project-generic.jpg"],
      repoLink: "https://github.com/gasabe/DailyTuki",
      demoLink: "https://dailytuki.netlify.app/",
    },
    {
      title: "Gestor de Libros",
      description:
        "Primera app en React + Spring Boot para gestionar recomendaciones de libros, hecha en la UNSAM junto a mis compañeros.",
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
      demoLink: "",
    },
    {
      title: "Uberto",
      description: "App en React + Spring Boot para contratar autos.",
      cover: "/uberto.png",
      screenshots: [
        "/uberto-demo0.gif",
        "/uberto-demo1.gif",
        "/uberto-demo2.gif",
        "/uberto-demo3.gif",
      ],
      repoLink: "https://github.com/gasabe/Frontend-Uberto-2025.git",
      demoLink: "",
    },
    {
      title: "Taller",
      description: "App en React para gestionar un taller mecánico.",
      cover: "/taller.jpg",
      screenshots: ["/taller.jpg", "/taller-2.jpg"],
      repoLink: "https://github.com/gasabe",
      demoLink: "https://taller-mecanico-the-friends.netlify.app/",
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
