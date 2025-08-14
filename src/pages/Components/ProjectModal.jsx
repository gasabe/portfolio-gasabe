import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../src/pages/Home/styles/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [zoomIndex, setZoomIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const toggleZoom = (index) => {
    setZoomIndex(zoomIndex === index ? null : index);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} autoFocus>×</button>

        <h2>{project.title}</h2>

        <Slider {...settings}>
          {project.screenshots.map((src, i) => (
            <div key={i} className={`slide-item ${zoomIndex === i ? 'zoomed' : ''}`}>
              <img
                src={src}
                alt={`screenshot-${i}`}
                loading="lazy"
                className={`modal-media ${zoomIndex === i ? 'zoomed' : ''}`}
                onClick={() => toggleZoom(i)}
              />
            </div>
          ))}
        </Slider>

        <p>{project.description}</p>

        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          <button>Ver en GitHub</button>
        </a>
      </div>
    </div>
  );
}
