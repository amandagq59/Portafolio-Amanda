import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaHourglassHalf } from 'react-icons/fa';
import './cardProyectos.css';

export const CardRoman = () => {
  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="project-card h-100">
        <div className="project-image-wrapper">
          <img src="./images/proyectos/roman.jpg" alt="" />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Card.Title className="project-title">Rozas&Roman</Card.Title>
            <span className="project-badge">WEB APP</span>
          </div>

          <p className="project-subtitle">Full-Stack Web · 2025</p>

          <Card.Text className="project-description ">
            Portal web para una asesoría de abogados de Málaga.
          </Card.Text>

          <ul className="project-features">
            <li>Contacto directo para hablar con la asesoría.</li>
            <li>Formulario de contacto con validaciones</li>
            <li>Vista detallada por ID de cada servicio prestado.</li>
            <li>Optimización SEO de la página web.</li>
          </ul>

          <div className="project-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Figma</span>
            <span>Resend</span>
            <span>Vercel</span>
          </div>

          <p className='text-danger text-center'>Backend en desarrollo</p>

          <div className="project-links mt-auto">
            <a
              href="https://github.com/amandagq59/Asesoria-Rozas-Roman.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://youtu.be/PuMuOGjPmd8?si=fCbcOTDsyDicRefM"
              target="_blank"
            >
              Youtube ↗
            </a>
            <a href="https://www.rozasroman.com/" target="_blank">
              Web ↗
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
