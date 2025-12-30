import React, { useState } from 'react';
import './sobreMiSections.css';
import { Button } from 'react-bootstrap';
import { Descripcion } from '../components/sobreMi/descripcion/Descripcion';
import { Formacion } from '../components/sobreMi/formacion/Formacion';
import { FaUserGraduate } from "react-icons/fa";
import { TbFlowerFilled } from 'react-icons/tb';
import { AiFillStar } from 'react-icons/ai';
import { Experiencia } from '../components/sobreMi/experiencia/Experiencia';

export const SobreMiSections = () => {
  const [section, setSection] = useState(1);
  return (
    <section className="section-sobreMi d-flex flex-column py-lg-4" id='conoceme'>
      <h3 className='text-center mt-5'>Conóceme</h3>
      <div className='linea-lateral-naranja'></div>
      <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-5 mt-5 px-3">
        <button
          className={section == 1 ? 'buttonColor' : 'changeColor'}
          onClick={() => setSection(1)}
        >
          <TbFlowerFilled /> ¿Quién soy?
        </button>
        <button
          className={section == 2 ? 'buttonColor' : 'changeColor'}
          onClick={() => setSection(2)}
        >
          {' '}
          <AiFillStar /> Experiencia
        </button>
        <button
          className={section == 3 ? 'buttonColor' : 'changeColor'}
          onClick={() => setSection(3)}
        >
          {' '}
          <FaUserGraduate/> Formación
        </button>
      </div>
      <div className="d-flex justify-content-center gap-5 pt-5">
        {section === 1 && <Descripcion />}
        {section === 2 && <Experiencia />}
        {section === 3 && <Formacion />}
      </div>
    </section>
  );
};
