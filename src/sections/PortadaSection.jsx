import React from 'react';
import './portadaSection.css';
import { Col } from 'react-bootstrap';

export const PortadaSection = () => {
  return (
    <div>
      <section className="section-portada" id="portada">
        <svg
          className="animate-background"
          viewBox="-100 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-80 10)">
            <path
              className="naranja"
              d="m38.52809,-5c-12.1832,-9.7 -32.04489,-14.1 -47.29949,-5c-19.75931,11.8 -24.05926,41.1 -10.85226,59c15.86888,21.5 53.8518,22 68.79926,2.3c12.28558,-16.3 6.44993,-42.8 -10.6475,-56.3z"
            />
            <path
              className="amarillo"
              d="m23.53736,4.22653c-9.82841,-2.86149 -24.57103,-1.76091 -31.23251,7.81406c-9.06398,13.0968 -0.21841,37.85966 16.81751,42.70217s37.89399,-12.21634 36.69274,-28.06457c-0.87364,-11.44594 -12.66773,-19.70023 -22.27773,-22.45166z"
            />
          </g>
          <path
            d="m105.9,50.88357c-12.4,-7.98865 -29.3,-4.67628 -39.4,0.77938c-23.4,12.47008 -37.7,50.56228 -19.1,72.19008s63.9,14.90564 76,-5.45566c7.6,-12.95719 1.8,-30.2984 -2.3,-42.67106c-3.5,-10.52163 -6.4,-19.28966 -15.2,-24.84274z"
            className="rosa"
          />
          <path
            d="m101.37962,63.69679c-10.14754,-6.47895 -23.25478,-3.29258 -31.18255,2.12425c-16.27835,11.36472 -20.7179,39.82961 -8.03347,50.76948s37.94758,4.14228 47.03808,-13.27654c6.44792,-12.53305 4.75666,-31.65126 -7.82206,-39.61719z"
            className="azul"
          />
        </svg>
        <div className="d-flex justify-content-center align-items-center ">
          <div>
            <h1>
              FULL STACK <br /> <span>WEB DEVELOPER</span>
            </h1>
            <h2>Amanda Gómez</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
