import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section>
      <h2>Sobre mí</h2>
      <p>
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
    </section>
  );
}
