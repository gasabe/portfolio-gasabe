import React from "react";
import Slider from "react-slick";
import ProjectCard from "../../Components/Card.jsx";

// Estilos necesarios
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section style={{ width: "100%", padding: "2rem 0" }}>
      <h2 className="home-title">Proyectos</h2>
      <Slider {...settings}>
        <div>
          <ProjectCard
            title="Gestor de Libros"
            description="App en React + Spring Boot para gestionar recomendaciones de libros"
            image="/readapp.png"
            repoLink="https://github.com/gasabe/React-ReadApp.git"
          />
        </div>
        <div>
          <ProjectCard
            title="Uberto"
            description="App en React + Spring Boot para contratar autos"
            image="/uberto.png"
            repoLink="https://github.com/gasabe/Frontend-Uberto-2025.git"
          />
        </div>
        <div>
          <ProjectCard
            title="MerenApp"
            description="App en React + Spring Boot para gestionar donaciones a comedores"
            image="/merendapp.jpg"
            repoLink="https://github.com/Unsam-LosPerris/MerendApp-Front.git"
          />
        </div>
        <div>
          <ProjectCard
            title="Taller"
            description="App en React para gestionar un taller mecánico"
            image="/taller.jpg"
            repoLink="https://taller-mecanico-the-friends.netlify.app/"
          />
        </div>
      </Slider>
    </section>
  );
}
