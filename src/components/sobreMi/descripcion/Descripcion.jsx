import React from 'react';
import './descripcion.css';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCarAlt } from 'react-icons/fa';

import { useInView } from '../../../hooks/useInView';

export const Descripcion = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.2, once: true });

  return (
    <section className="conoceme container-lg" ref={sectionRef}>
      <article className={`slide-from-left mb-5 ${inView ? 'in-view' : ''}`}>
        <p>
          Soy <span>educadora social</span> de formación, con experiencia en el
          trabajo con personas, la comunicación y la resolución de problemas.
          Tras un proceso de reflexión personal y profesional, decidí dar el
          paso hacia la <span>programación</span>, un ámbito que siempre me ha
          apasionado. Me encuentro en constante aprendizaje y actualización,
          consciente de que la tecnología es un sector en continua evolución, y
          motivada por seguir creciendo y aportando valor desde una combinación
          de habilidades técnicas y humanas.
        </p>
      </article>

      <Row className="align-items-center">
        {/* Columna de texto y habilidades */}
        <Col lg={6} className="d-flex flex-column gap-4">
          <div
            className={`habilidades glow-border slide-from-left ${
              inView ? 'in-view' : ''
            }`}
          >
            <h5>Habilidades profesionales</h5>
            <ul>
              <li>Organización de proyectos</li>
              <li>Cumplimiento de objetivos</li>
              <li>Maquetación con criterios estéticos y funcionales</li>
              <li>Resolución de problemas y depuración de código</li>
              <li>Base de datos y control de versiones</li>
            </ul>
          </div>

          <div
            className={`cualidades glow-border slide-from-left ${
              inView ? 'in-view' : ''
            }`}
          >
            <h5>Cualidades personales</h5>
            <ul>
              <li>Pensamiento crítico</li>
              <li>Buena comunicación y trabajo en equipo</li>
              <li>Adaptabilidad a cualquier situación o entorno</li>
              <li>Perseverancia ante los retos</li>
              <li>Responsable, comprometida y aprendizaje continuo</li>
            </ul>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3">
            <p>
              <AiOutlineCheck /> Incorporación inmediata
            </p>
            <p>
              <FaCarAlt /> Disponibilidad de reubicación
            </p>
          </div>
        </Col>

        <Col lg={6} className="d-flex justify-content-center">
          <img
            className={`img-amanda slide-from-rigth ${inView ? 'in-view' : ''}`}
            src="/images/portada.png"
            alt="Imagen de presentación"
          />
        </Col>
      </Row>
    </section>
  );
};
