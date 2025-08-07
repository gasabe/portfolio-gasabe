// ProjectCard.jsx
import '../../../src/pages/Home/styles/ProjectCard.css';

export default function ProjectCard({ title, description, image, repoLink, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
          onClick={(e) => e.stopPropagation()} // Evita que el click al botón cierre el modal
        >
          CONOCÉ MÁS
        </a>
      </div>
    </div>
  );
}
