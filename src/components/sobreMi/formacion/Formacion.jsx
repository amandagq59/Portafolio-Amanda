import React, { useState } from 'react';
import './formacion.css';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { BsRewindFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';

import { Button, Card, CardTitle, Col } from 'react-bootstrap';

export const Formacion = () => {
  const [ChangeForm, SetChangeForm] = useState(0);
  return (
<section className="container my-5">
  <div className="row g-4 position-relative">

    {/* Card 1 */}
    <div className="col-md-6 col-lg-4">
      <Card className="card-formacion-profesional text-center">
        <Card.Body>
          <div className="orden">1</div>
          <Card.Title>Bootcamp Full Stack Web Developer</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Escuela SocraTech</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">2025</Card.Subtitle>
          <Card.Text className="text-muted">
            Formación en intervención socioeducativa y promoción del bienestar e inclusión de personas y comunidades.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    {/* Card 2 */}
    <div className="col-md-6 col-lg-4">
      <Card className="card-formacion-profesional text-center">
        <Card.Body>
          <div className="orden">2</div>
          <Card.Title>Educación Social</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">Universidad de Málaga</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">2016-2020</Card.Subtitle>
          <Card.Text className="text-muted">
            Formación intensiva con foco práctico en desarrollo full stack moderno.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    {/* Card 3 */}
    <div className="col-md-6 col-lg-4">
      <Card className="card-formacion-profesional text-center">
        <Card.Body>
          <div className="orden">3</div>
          <Card.Title>Coaching e Inteligencia Emocional Infantil y Adolescente</Card.Title>
          <Card.Subtitle className="mb-1 text-muted">ESNECA Business School</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">2020-2021</Card.Subtitle>
          <Card.Text className="text-muted">
            Formación en acompañamiento y desarrollo de habilidades emocionales en niños y adolescentes.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    {/* Card 4 */}
    <Col className='d-flex justify-content-center gap-5'>
      <div className="col-md-6 col-lg-4 ">
        <Card className="card-formacion-profesional text-center">
          <Card.Body>
            <div className="orden">4</div>
            <Card.Title>Certificado Internacional en Prevención de la Violencia de Género y Educación Emocional</Card.Title>
            <Card.Subtitle className="mb-1 text-muted">ESNECA Business School</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">2020-2021</Card.Subtitle>
            <Card.Text className="text-muted">
              Capacitación en prevención, sensibilización y educación emocional aplicada a la igualdad y la protección frente a la violencia de género.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* Card 5 */}
      <div className="col-md-6 col-lg-4">
        <Card className="card-formacion-profesional text-center">
          <Card.Body>
            <div className="orden">5</div>
            <Card.Title>Ciclo Formativo Superior de Animación Sociocultural</Card.Title>
            <Card.Subtitle className="mb-1 text-muted">Instituto Ben Gabirol</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">2014-2016</Card.Subtitle>
            <Card.Text className="text-muted">
              Formación en diseño y gestión de actividades educativas, culturales y recreativas que fomentan la participación, la cohesión social y el desarrollo comunitario.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>

  </div>
</section>


  );
};
