import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './cardExperienciaIndv.css';
import { FaArrowLeft } from 'react-icons/fa6';

export const CardEducadoraSocial = () => {
  return (
    <section>
      <Col lg={12} className="d-flex gap-3">
        <Card className="card-experienciaIndv">
          <Card.Body>
            <Card.Title>Educadora Social</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Asociación GINSO
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              2 años y 8 meses
            </Card.Subtitle>
            <Card.Text className="card-text text-muted text-start">
              <ul>
                 <li>Mediación y resolución de conflictos</li>
                <li>Colaboración interdisciplinar</li>
                <li>Elaboración de informes de seguimientos y evolución</li>
                <li>Prevención y contención de conductas disruptivas</li>
                <li>Participación en programas de ocio educativo y deportivo
                </li>
                <li>Intervención socioeducativa directa</li>
                <li>Gestión documental y administrativa</li>
                <li>Toma de decisiones</li>
              </ul>
              <a
                className="d-flex justify-content-end"
                href="/images/recomendaciones/marchenilla.pdf"
                download
              >
                Descargar recomendación
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
          <FaArrowLeft size={20} className="flecha-experiencia my-auto"/>
        <Card className="card-experienciaIndv">
          <Card.Body>
            <Card.Title>Educadora Social</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ASIMAS</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">9 meses</Card.Subtitle>
            <Card.Text className="card-text text-muted text-start">
              <ul>
                <li>Mediación y resolución de conflictos</li>
                <li>Registro y elaboración de informes de seguimiento</li>
                <li>
                  Coordinación con servicios sociales, sanitarios y entidades
                  del tercer sector
                </li>
                <li>
                  Organización y ejecución de talleres y dinámicas de grupos
                </li>
                <li>Acompañamiento en trámites administrativos</li>
                <li>Entrevistas a posibles residentes</li>
                <li>Atención socioeducativa directa</li>
              </ul>
              <a
                className="d-flex justify-content-end"
                href="/images/recomendaciones/asimas.pdf"
                download
              >
                Descargar recomendación
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
          <FaArrowLeft size={20} className="flecha-experiencia my-auto" />
        <Card className="card-experienciaIndv">
          <Card.Body>
            <Card.Title>Educadora Social</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Plataforma Educativa
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">1 año</Card.Subtitle>
            <Card.Text className="card-text text-muted text-start">
              <ul>
                <li>Atención socioeducativa directa</li>
                <li>Acompañamiento en la vida cotidiana</li>
                <li>
                  Diseño e implementación de actividades educativas y de ocio
                </li>
                <li>Mediación y resolución de conflictos</li>
                <li>Trabajo en red e interdisciplinar</li>
                <li>Gestión emocional y acompañamiento psicológico básico</li>
                <li>
                  Registro y redacción de informes educativos y de seguimiento
                </li>
                <li>Participación en reuniones de equipo</li>
              </ul>
              <a
                className="d-flex justify-content-end"
                href="/images/recomendaciones/crae.pdf"
                download
              >
                Descargar recomendación
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </section>
  );
};
