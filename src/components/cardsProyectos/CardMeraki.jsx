import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './cardProyectos.css';

export const CardMeraki = () => {
  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="project-card h-100">
        <div className="project-image-wrapper">
          <img src="./images/proyectos/meraki.jpg" alt="" />
        </div>
        <Card.Body className="d-flex flex-column">
          {/* Header */}

          <div className="d-flex justify-content-between align-items-start ">
            <Card.Title className="project-title">Meraki</Card.Title>
            <span className="project-badge">WEB APP</span>
          </div>

          <p className="project-subtitle">Frontend Project · 2025</p>

          {/* Descripción */}
          <Card.Text className="project-description">
            Portal web desarrollado en mis ratos libres. Meraki es una
            aplicación para la gestión y reserva de viajes en grupo.
          </Card.Text>

          {/* Features */}
          <ul className="project-features">
            <li>Mapeo de todos los viajes disponibles</li>
            <li>Vista detallada por ID de cada viaje</li>
            <li>Registro y login de usuarios</li>
            <li>Buscador del tiempo por ciudad (Weather API)</li>
          </ul>

          {/* Tecnologías */}
          <div className="project-tags">
            <span>React</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Weather API</span>
          </div>

          {/* Links */}
          <div className="project-links mt-auto">
            <a
              href="https://github.com/amandagq59/Meraki.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://youtu.be/vY6RCUfzBWo?si=0LtJnIicSDGdPXoO"
              target="_blank"
            >
              Video ↗
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
