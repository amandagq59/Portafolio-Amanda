import React from 'react';
import './cardExperienciaIndv.css';
import { Card } from 'react-bootstrap';

export const CardSupervisora = () => {
  return (
    <Card className="card-experienciaIndv">
      <Card.Body>
        <Card.Title>Supervisora</Card.Title>
        <Card.Subtitle className="mb-2 ">Starbucks</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">3 años y 8 meses</Card.Subtitle>
        <Card.Text className="card-text text-start">
          <ul>
            <li>Supervisión y coordinación del equipo de baristas</li>
            <li>Gestión operativa de turnos</li>
            <li>Apertura y cierre de la caja y tienda</li>
            <li>Gestión de inventario y pedidos</li>
            <li>Formación y acompañamiento a nuevos empleados</li>
            <li>Motivación del equipo</li>
            <li>
              Apoyo a la gerencia en reportes de ventas, objetivos y rendimiento
              local
            </li>
            <li>Gestión de conflictos tanto internos como externos</li>
          </ul>
          <a
            className="d-flex justify-content-end"
            href="/images/recomendaciones/starbucks.pdf"
            download
          >
            Descargar recomemdación
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
