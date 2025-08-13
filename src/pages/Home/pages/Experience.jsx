import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Experience() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>
          "Si puedes pensarlo, <span></span>
          <TypeAnimation
            sequence={[
              'podes programarlo"',
              1000,
              'podes optimizarlo"',
              1000,
              'podes implementarlo"',
              1000,
              'podes desarrollarlo"',
              1000,
              'podes lograrlo"',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h2>Experiencia</h2>
        <article>
          <h3>Analista de Costos — Trafind BE‑KE (2023–2025)</h3>
          <ul>
            <li>Análisis y armado de costos para productos.</li>
            <li>
              Seguimiento de agenda, revisión documental y control de archivo.
            </li>
          </ul>
        </article>
        <article>
          <h3>Encargado Multidisciplinar — Stoord Autoclaves (2013–2023)</h3>
          <ul>
            <li>
              Diagnóstico, mantenimiento preventivo y correctivo de autoclaves.
            </li>
            <li>
              Reparación de componentes eléctricos, electrónicos y neumáticos.
            </li>
            <li>Armado y calibración de equipos nuevos.</li>
            <li>Atención técnica a clientes y soporte posventa.</li>
            <li>
              Logística, control de stock y planificación de insumos técnicos.
            </li>
            <li>Mejora de procesos y diseño de soluciones a medida.</li>
          </ul>
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
