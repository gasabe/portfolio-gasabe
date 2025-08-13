import React from "react";

export default function About() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="mb-6">
          Técnico en programación informática y técnico electrónico, orientado
          al desarrollo Full Stack. Experiencia en Kotlin, Spring Boot y React,
          con un enfoque práctico para resolver problemas y aprender nuevas
          tecnologías.
        </p>

        <h2>Educación</h2>
        <article className="educacion-item">
          <img src="/logo_UNSAM.png" alt="Logo UNSAM" className="logo-edu" />
          <div>
            <h3>UNSAM — Programación Informática (2020–2025)</h3>
            <p>Graduado 2025</p>
          </div>
        </article>

        <article className="educacion-item">
          <img
            src="/eetn1.png"
            alt="Logo EET N°1 Manuel Belgrano"
            className="logo-edu"
          />
          <div>
            <h3>
              EET N°1 Manuel Belgrano — Especialización en Automatización
              (2007–2013)
            </h3>
            <p>Graduado 2013</p>
          </div>
        </article>

        <h2>Cursos / Idiomas</h2>
        <article className="educacion-item">
          <img
            src="/liceo.png"
            alt="Logo Liceo Británico"
            className="logo-edu"
          />
          <div>
            <h3>Programa de Lenguas — Liceo Británico (2025–Actualidad)</h3>
            <p>Inglés</p>
          </div>
        </article>

        <h2 className="conocimientos-title">Conocimientos Técnicos</h2>
        <ul className="conocimientos-list">
          <li>
            <span className="icon">💻</span>
            <span className="label-light">Frontend:</span>
            <span className="value">
              HTML, CSS, Angular, React (Material UI)
            </span>
          </li>
          <li>
            <span className="icon">⚙️</span>
            <span className="label-light">Backend:</span>
            <span className="value">Python, Kotlin</span>
          </li>
          <li>
            <span className="icon">🗄️</span>
            <span className="label-light">Bases de datos:</span>
            <span className="value">
              MongoDB, PostgreSQL, Diseño de esquemas y consultas SQL
            </span>
          </li>
          <li>
            <span className="icon">🛠️</span>
            <span className="label-light">Otros:</span>
            <span className="value">
              C, Assembly, reparación/ensamblaje de PC, Paquete Office
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
