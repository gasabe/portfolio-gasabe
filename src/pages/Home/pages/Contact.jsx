import React from "react";

export default function Contact() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2>Contacto</h2>

        <div className="contact-item">
          <img src="../whatsapp.png" alt="WhatsApp" className="contact-icon" />
          <a href="https://wa.me/5491140654620" target="_blank" rel="noreferrer">
            +54 9 11 4065 4620
          </a>
        </div>

        <div className="contact-item">
          <img src="../gmail.png" alt="Email" className="contact-icon" />
          <a href="mailto:abelardogaston@gmail.com">
            abelardogaston@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <img src="../linkedin.png" alt="LinkedIn" className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/gaston-ezequiel-abelardo-680b12187"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-item">
          <img src="../github.png" alt="GitHub" className="contact-icon" />
          <a
            href="https://github.com/gasabe"
            target="_blank"
            rel="noreferrer"
          >
            github.com/gasabe
          </a>
        </div>
      </div>
    </section>
  );
}
