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

          <p className="project-status mb-2">
            <strong className="text-warning">
              EN ELABORACIÓN · PRÓXIMAMENTE <FaHourglassHalf />
            </strong>
          </p>
          <div className="project-links mt-auto">
            <a
              href="https://github.com/amandagq59/Rozas-Roman.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
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
