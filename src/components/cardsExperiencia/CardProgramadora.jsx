import React from 'react';
import './cardExperienciaIndv.css';
import { Card, Col } from 'react-bootstrap';

export const CardProgramadora = () => {
  return (
    <section>
      
      <Card className="card-experienciaIndv">
        <Card.Body>
          <Card.Title>Desarrolladora Full Stack</Card.Title>
          <Card.Subtitle className="mb-2">
            IdeaCasa Real Estate
          </Card.Subtitle>
          <Card.Subtitle className="mb-2">3 meses</Card.Subtitle>
          <Card.Text className="card-text text-start">
            <ul>
              <li>
                Utilización de Trello para la gestión y coordinación de tareas
                en equipo durante el desarrollo del proyecto.
              </li>
              <li>
                Diseño del diagrama entidad-relación. Desarrollo de la base de
                datos en MySQL.
              </li>
              <li> Diseño de la interfaz con Figma.</li>
              <li>Diseño de la arquitectura del sistema.</li>
              <li>
                Desarrollo Frontend con tecnologías como ReactJS, HTML5, CSS3 y
                JavaScript.
              </li>
              <li>
                Desarrollo Backend utilizando Node.js y el framework Express.
              </li>
              <li>Integración y manejo de APIS.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};
