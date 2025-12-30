import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaHourglassHalf } from 'react-icons/fa';

export const CardRoman = () => {
  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="project-card h-100">
         <div className="project-image-wrapper">
      <img src="./images/proyectos/roman.jpg" alt="" />
    </div>
        <Card.Body className="d-flex flex-column">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Card.Title className="project-title">Rozas&Roman</Card.Title>
            <span className="project-badge">WEB APP</span>
          </div>

          <p className="project-subtitle">Full-Stack Web · 2025</p>

          {/* Descripción */}
          <Card.Text className="project-description text-muted">
            Portal web para una asesoría de abogados de Málaga.
          </Card.Text>

          <p className="project-status mb-2">
            <strong className="text-warning">
              EN ELABORACIÓN · PRÓXIMAMENTE 
            </strong>
          </p>

          <div className="mt-auto d-flex align-items-center gap-2 text-warning">
            <FaHourglassHalf />    <FaHourglassHalf /> <FaHourglassHalf />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
