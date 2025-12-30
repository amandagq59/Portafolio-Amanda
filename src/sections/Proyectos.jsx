import React, { useState } from 'react';
import './proyectos.css';
import { CardIdeaCasa } from '../components/cardsProyectos/CardIdeaCasa';
import { CardMeraki } from '../components/cardsProyectos/CardMeraki';
import { CardSabores } from '../components/cardsProyectos/CardSabores';
import { CardRoman } from '../components/cardsProyectos/CardRoman';
import { GoLaw } from 'react-icons/go';
import { Row } from 'react-bootstrap';

export const Proyectos = () => {
  const [Changeproyect, SetChangeProyect] = useState(1);
  return (
    <section className="section-proyectos py-4" id="proyectos">
      <h3 className="text-center mt-5">Proyectos</h3>
      <div className="linea-lateral-amarillo"></div>

      <div className="container">
        <Row className="g-4">
          <CardIdeaCasa />
          <CardMeraki />
          <CardSabores />
          <CardRoman />
        </Row>
      </div>
    </section>
  );
};
