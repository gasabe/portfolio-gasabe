import React from "react";

export default function Experience() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2>Experiencia</h2>

        <article>
          <h3>Desarrollador Web Freelance — Freelance (2025–Actualidad)</h3>
          <ul>
            <li>
              Desarrollo de sitios web personalizados utilizando React,
              JavaScript, HTML y CSS.
            </li>
            <li>
              Implementación de interfaces responsivas y adaptación de
              funcionalidades según los requerimientos del cliente.
            </li>
            <li>
              Gestión integral de proyectos web, desde el relevamiento de
              necesidades hasta la entrega final.
            </li>
            <li>
              Desarrollo de páginas institucionales y soluciones web para
              clientes de distintos rubros.
            </li>
          </ul>
        </article>

        <article>
          <h3>
            Técnico de Soporte IT / Reparación de PC Freelance — Freelance
            (2025–Actualidad)
          </h3>
          <ul>
            <li>Diagnóstico, mantenimiento y reparación de PC y notebooks.</li>
            <li>
              Instalación y configuración de sistemas operativos, software y
              componentes de hardware.
            </li>
            <li>
              Optimización de equipos mediante limpieza interna, reemplazo de
              piezas y mejora de rendimiento.
            </li>
            <li>
              Resolución de incidencias técnicas vinculadas a hardware, software
              y periféricos.
            </li>
            <li>
              Asesoramiento técnico a clientes sobre reparación, actualización y
              mejora de equipos.
            </li>
          </ul>
        </article>

        <article>
          <h3>Analista de Costos — Trafind BE-KE (2023–2025)</h3>
          <ul>
            <li>
              Análisis y estructuración de costos de productos industriales.
            </li>
            <li>
              Revisión técnica de documentación y coordinación de información
              entre áreas.
            </li>
            <li>
              Optimización de procesos de análisis, reduciendo tiempos de
              trabajo.
            </li>
            <li>
              Mejora en la precisión de datos y reducción de errores en
              reportes.
            </li>
          </ul>
        </article>

        <article>
          <h3>Técnico Electrónico — Stoord Autoclaves (2013–2023)</h3>
          <ul>
            <li>Diagnóstico y mantenimiento de equipos industriales.</li>
            <li>Reparación de sistemas eléctricos y electrónicos.</li>
            <li>Calibración y armado de equipos técnicos.</li>
            <li>Gestión de insumos y stock.</li>
            <li>Mejora de procesos internos y soporte técnico a clientes.</li>
            <li>Capacitación a técnicos nuevos.</li>
          </ul>
        </article>

        <h2 className="conocimientos-title">Conocimientos Técnicos</h2>
        <ul className="conocimientos-list">
          <li>
            <span className="icon">💻</span>
            <span className="label-light">Frontend:</span>
            <span className="value">
              HTML5, CSS3, JavaScript (ES6+), React.js, Vite, Material UI,
              Responsive Design, UI/UX básico
            </span>
          </li>
          <li>
            <span className="icon">⚙️</span>
            <span className="label-light">Backend:</span>
            <span className="value">
              Node.js (básico), Kotlin, Spring Boot, Python, APIs REST
            </span>
          </li>
          <li>
            <span className="icon">🗄️</span>
            <span className="label-light">Bases de datos:</span>
            <span className="value">
              MySQL, PostgreSQL, MongoDB, consultas SQL y diseño de esquemas
            </span>
          </li>
          <li>
            <span className="icon">🛠️</span>
            <span className="label-light">Herramientas:</span>
            <span className="value">
              Git, GitHub, Postman, Docker (básico), Jira, Scrum, metodologías
              ágiles
            </span>
          </li>
          <li>
            <span className="icon">🔧</span>
            <span className="label-light">Otros:</span>
            <span className="value">
              Reparación y ensamblaje de PC, soporte técnico, Paquete Office
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}