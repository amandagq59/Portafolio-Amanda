import React, { useState } from 'react';
import './experiencia.css';
import { Card, Col } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
import { CardProgramadora } from '../../cardsExperiencia/CardProgramadora';
import { CardEducadoraSocial } from '../../cardsExperiencia/CardEducadoraSocial';
import { CardSupervisora } from '../../cardsExperiencia/CardSupervisora';
import { FaChevronDown } from 'react-icons/fa';
import { CgArrowLongRight } from "react-icons/cg";

export const Experiencia = () => {
  const [seleccion, setSeleccion] = useState(0);

  const changeSeleccion = (numero) => {
    if (numero === seleccion) {
      setSeleccion(0);
    } else {
      setSeleccion(numero);
    }
  };
   const [activeIndex, setActiveIndex] = useState(0);

  // Handler para scroll del slider
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section className="container gap-4">
      <Col
        lg={12}
        className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4"
      >
        <div className="d-flex flex-column align-items-center w-100">
          <Card className="card-experiencia w-100">
            <Card.Body>
              <Card.Title>Programadora</Card.Title>
              <Card.Text className="card-text text-start">
                El inicio de una nueva etapa profesional, asumida como una
                oportunidad para aprender, aportar valor y crecer de forma
                constante
              </Card.Text>
              <Card.Link onClick={() => changeSeleccion(1)}>
                {seleccion === 1 ? 'Ocultar experiencias' : 'Ver experiencias'}
              </Card.Link>
            </Card.Body>
          </Card>

          {seleccion === 1 && (
            <FaChevronDown size={24} className="mt-3 text-muted d-lg-none" />
          )}

          {seleccion === 1 && (
            <div className="w-100 d-lg-none">
              <CardProgramadora />
            </div>
          )}
        </div>

        <CgArrowLongRight
          size={50}
          className="flecha-experiencia d-none d-lg-block"
        />

         <div className="d-flex flex-column align-items-center w-100">
      {/* Card resumen */}
      <Card className="card-experiencia w-100">
        <Card.Body>
          <Card.Title>Educadora Social</Card.Title>
         <Card.Text className="card-text text-start">
            Años acompañando y aprendiendo de otros me han enseñado a
            construir soluciones con empatía y propósito.
          </Card.Text>

          <Card.Link onClick={() => changeSeleccion(2)}>
            {seleccion === 2 ? 'Ocultar experiencias' : 'Ver experiencias'}
          </Card.Link>
        </Card.Body>
      </Card>

      {/* Flecha solo móvil */}
      {seleccion === 2 && (
        <FaChevronDown
          size={24}
          className="mt-2 text-muted d-lg-none flecha-abierta"
        />
      )}

      {/* Slider solo móvil */}
      {seleccion === 2 && (
        <>
          <div
            className="slider-mobile d-lg-none mt-3"
            onScroll={handleScroll}
          >
            <CardEducadoraSocial />
          </div>

          {/* Dots */}
          <div className="slider-dots mt-2 d-lg-none">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`dot ${activeIndex === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>

         <CgArrowLongRight
          size={50}
          className="flecha-experiencia d-none d-lg-block"
        />

        <div className="d-flex flex-column align-items-center w-100">
          {/* Card superior */}
          <Card className="card-experiencia w-100">
            <Card.Body>
              <Card.Title>Supervisora</Card.Title>
             <Card.Text className="card-text text-start">
                Cada experiencia con mi equipo me enseñó a transformar desafíos
                en logros con dedicación y visión.
              </Card.Text>

              <Card.Link onClick={() => changeSeleccion(3)}>
                {seleccion === 3 ? 'Ocultar experiencias' : 'Ver experiencias'}
              </Card.Link>
            </Card.Body>
          </Card>

          {seleccion === 3 && (
            <FaChevronDown
              size={24}
              className="mt-2 text-muted d-lg-none flecha-abierta"
            />
          )}

          {seleccion === 3 && (
            <div className="mt-2 d-lg-none">
              <CardSupervisora />
            </div>
          )}
        </div>
      </Col>

      {/* 👇 SOLO DESKTOP */}
      <div className="d-none d-lg-block mt-5">
        {seleccion === 1 && <CardProgramadora />}
        {seleccion === 2 && <CardEducadoraSocial />}
        {seleccion === 3 && <CardSupervisora />}
      </div>
    </section>
  );
};
