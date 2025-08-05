import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="mb-6">
          Soy técnico en programación informática, apasionado por el desarrollo de
          software y la resolución de problemas. Me gusta trabajar con Kotlin,
          Spring Boot, Angular y seguir aprendiendo nuevas tecnologías.
        </p>

        <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
          "Si puedes pensarlo, <br />
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
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold text-secondary"
          />
        </h1>
      </div>
    </section>
  );
}
