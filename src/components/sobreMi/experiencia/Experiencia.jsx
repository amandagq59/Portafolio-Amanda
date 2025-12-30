import React, { useState } from 'react';
import './experiencia.css';
import { Card, Col } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
import { CardProgramadora } from '../../cardsExperiencia/CardProgramadora';
import { CardEducadoraSocial } from '../../cardsExperiencia/CardEducadoraSocial';
import { CardSupervisora } from '../../cardsExperiencia/CardSupervisora';

export const Experiencia = () => {
  const [seleccion, setSeleccion] = useState(0);

  const changeSeleccion = (numero) => {
    if (numero === seleccion) {
      setSeleccion(0);
    } else {
      setSeleccion(numero);
    }
  };

  return (
    <section className="container gap-4">
      <Col
        lg={12}
        className="d-flex justify-content-center align-items-center gap-3"
      >
        <Card className="card-experiencia">
          <Card.Body>
            <Card.Title>Programadora</Card.Title>
            <Card.Text className="card-text text-muted text-start">
              El inicio de una nueva etapa profesional, asumida como una
              oportunidad para aprender, aportar valor y crecer de forma
              constante
            </Card.Text>
            <Card.Link onClick={() => changeSeleccion(1)}>
              {seleccion === 1 ? 'Ocultar experiencias' : 'Ver experiencias'}
            </Card.Link>
          </Card.Body>
        </Card>

        <FaArrowLeft size={30} className="flecha-experiencia" />

        <Card className="card-experiencia">
          <Card.Body>
            <Card.Title>Educadora Social</Card.Title>
            <Card.Text className="card-text text-muted text-start">
              Años acompañando y aprendiendo de otros me han enseñado a
              construir soluciones con empatía y propósito.
            </Card.Text>
            <Card.Link onClick={() => changeSeleccion(2)}>
              {seleccion === 2 ? 'Ocultar experiencias' : 'Ver experiencias'}
            </Card.Link>
          </Card.Body>
        </Card>

        <FaArrowLeft size={30} className="flecha-experiencia" />

        <Card className="card-experiencia">
          <Card.Body>
            <Card.Title>Supervisora</Card.Title>
            <Card.Text className="card-text text-muted text-start">
              Cada experiencia con mi equipo me enseñó a transformar desafíos en
              logros con dedicación y visión.
            </Card.Text>
            <Card.Link onClick={() => changeSeleccion(3)}>
              {seleccion === 3 ? 'Ocultar experiencias' : 'Ver experiencias'}
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={12} className="d-flex">
        {seleccion === 1 && <CardProgramadora />}
        {seleccion === 2 && <CardEducadoraSocial />}
        {seleccion === 3 && <CardSupervisora />}
      </Col>
    </section>
  );
};
