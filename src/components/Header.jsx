import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Header.css';

const links = [
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'contact', label: 'Contacto' },
];

export default function Header({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <h1 className="header-title"> Portfolio </h1>
      <nav className="nav-links">
        {links.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-button ${activeSection === id ? 'active' : ''}`}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
