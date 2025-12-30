import React from 'react';
import { Card, Col } from 'react-bootstrap';

export const CardSabores = () => {
  return (
<Col lg={4} md={6} className="mb-4">
  <Card className="h-100 project-card">
    {/* Imagen ajustada automáticamente al ancho de la card */}
    <Card.Img 
      variant="top" 
      src="./images/proyectos/sabores.jpg" 
      className="project-card-img" 
    />
    
    <Card.Body className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-start ">
        <Card.Title className="project-title">Raíces y Sabores</Card.Title>
        <span className="project-badge">APP</span>
      </div>

      <p className="project-subtitle">Frontend Project · 2025</p>

      <Card.Text className="project-description text-muted">
        APP para amantes de la comida. Creada durante el bootcamp SocraTech en tan solo dos meses.
      </Card.Text>

      <ul className="project-features">
        <li>Registro y login de los foodies</li>
        <li>Edición de perfil de los foodies</li>
        <li>Edición/subida de los platos de los foodies</li>
        <li>Platos relacionados con cada foodie por su ID</li>
      </ul>

      <div className="project-tags">
        <span>EJS</span>
        <span>Node.js</span>
        <span>MySQL</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Bootstrap</span>
        <span>Express</span>
        <span>Nodemon</span>
        <span>Multer</span>
        <span>Bcrypt</span>
      </div>

      <div className="project-links mt-auto">
        <a href="https://github.com/amandagq59/Raices-Sabores.git" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://youtu.be/Q9oLGGt7HZY?si=17fbgiS0k6_PtMvk" target="_blank" rel="noreferrer">YouTube ↗</a>
      </div>
    </Card.Body>
  </Card>
</Col>



  );
};
