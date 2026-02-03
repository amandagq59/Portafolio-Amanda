import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './cardProyectos.css';

export const CardIdeaCasa = () => {
  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="project-card h-100">
        <div className="project-image-wrapper">
          <img src="./images/proyectos/ideacasa.jpg" alt="" />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Card.Title className="project-title">
              IdeaCasa Real Estate
            </Card.Title>
            <span className="project-badge">WEB APP</span>
          </div>
          <p className="project-subtitle">Full-Stack Web · 2025</p>
          <Card.Text className="project-description">
            Portal web desarrollado durante el bootcamp SocraTech para una
            inmobiliaria malagueña.
          </Card.Text>
          <ul className="project-features">
            <li>Gestión completa de inmuebles</li>
            <li>Estados: reservado, vendido y disponible</li>
            <li>Registro y permisos para colaboradores</li>
            <li>Valoración de inmuebles sin registro</li>
          </ul>
          <div className="project-tags">
            <span>React</span>
            <span>Node.JS</span>
            <span>HTML5</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
            <span>Express</span>
            <span>JS</span>
            <span>Vite</span>
            <span>Leaflet</span>
            <span>CSS3</span>
            <span>Bcrypt</span>
            <span>JSON Web Token</span>
            <span>Nodemailer</span>
            <span>Zod</span>
          </div>
          <div className="project-links mt-auto">
            <a
              href="https://github.com/amandagq59/IdeaCasa-Real-Estate"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://youtu.be/HFVvMtxjumY"
              target="_blank"
              rel="noreferrer"
            >
              Youtube ↗
            </a>
            <a
              href="https://www.figma.com/design/L8qTgtCNZqij3kzEiCtL0s/IdeaCasa"
              target="_blank"
              rel="noreferrer"
            >
              Figma ↗
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
