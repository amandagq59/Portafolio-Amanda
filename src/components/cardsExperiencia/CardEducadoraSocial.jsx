import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './cardExperienciaIndv.css';

export const CardEducadoraSocial = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const experiencias = [
    {
      empresa: 'Asociación GINSO',
      tiempo: '2 años y 8 meses',
      pdf: '/images/recomendaciones/marchenilla.pdf',
      items: [
        'Mediación y resolución de conflictos',
        'Colaboración interdisciplinar',
        'Elaboración de informes de seguimientos y evolución',
        'Prevención y contención de conductas disruptivas',
        'Participación en programas de ocio educativo y deportivo',
        'Intervención socioeducativa directa',
        'Gestión documental y administrativa',
        
      ],
    },
    {
      empresa: 'ASIMAS',
      tiempo: '9 meses',
      pdf: '/images/recomendaciones/asimas.pdf',
      items: [
        'Mediación y resolución de conflictos',
        'Registro y elaboración de informes de seguimiento',
        'Coordinación con servicios sociales, sanitarios y entidades del tercer sector',
        'Organización y ejecución de talleres y dinámicas de grupos',
        'Acompañamiento en trámites administrativos',
        'Entrevistas a posibles residentes',
        'Atención socioeducativa directa',
      ],
    },
    {
      empresa: 'Plataforma Educativa',
      tiempo: '1 año',
      pdf: '/images/recomendaciones/crae.pdf',
      items: [
        'Atención socioeducativa directa',
        'Acompañamiento en la vida cotidiana',
        'Diseño e implementación de actividades educativas y de ocio',
        'Mediación y resolución de conflictos',
        'Trabajo en red e interdisciplinar',
        'Gestión emocional y acompañamiento psicológico',
        'Registro y redacción de informes educativos y de seguimiento',
        'Realización de reuniones de equipo',
      ],
    },
  ];

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      // swipe izquierda
      setCurrent((prev) => (prev + 1) % experiencias.length);
    } else if (diff < -50) {
      // swipe derecha
      setCurrent((prev) =>
        prev === 0 ? experiencias.length - 1 : prev - 1
      );
    }

    setTouchStart(null);
  };

  return (
    <section
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* INDICADORES ARRIBA – MÓVIL */}
      <div className="slider-indicators">
        {experiencias.map((_, i) => (
          <span
            key={i}
            className={`indicator ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <Col lg={12} className="desktop-cards">
        {experiencias.map((exp, index) => (
          <Card
            key={index}
            className={`card-experienciaIndv ${
              index !== current ? 'inactive' : ''
            }`}
          >
            <Card.Body>
              <Card.Title>Educadora Social</Card.Title>

              <Card.Subtitle className="mb-2">
                {exp.empresa}
              </Card.Subtitle>

              <Card.Subtitle className="mb-2">
                {exp.tiempo}
              </Card.Subtitle>

              <Card.Text className="card-text text-start">
                <ul>
                  {exp.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <a
                  className="d-flex justify-content-end mt-4"
                  href={exp.pdf}
                  download
                >
                  Descargar recomendación
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </section>
  );
};
