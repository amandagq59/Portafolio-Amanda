import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';

import { FaLinkedin, FaGithubSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const FooterSection = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4 align-items-center">
          <Col
            xs={12}
            lg={6}
            className="text-footer text-center text-lg-start mb-4 mb-lg-0"
          >
            <h5>Amanda Gómez</h5>
            <p>
              "Mi enfoque en el desarrollo de software se basa en la calidad del
              código, la mejora continua y la creación de productos digitales
              con impacto"
            </p>
          </Col>

          <Col xs={12} lg={6} className="icons text-center">
            <h5>¿Quieres saber más sobre mí?</h5>
            <div className=" d-flex justify-content-center gap-4 fs-3">
              <a
                href="https://www.linkedin.com/in/amanda-g%C3%B3mez-quero/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/amandagq59" target="_blank">
                <FaGithubSquare />
              </a>
              <a href="tel:+34662110060" target="_blank">
                <FaPhoneSquareAlt />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=amanda1758@gmail.com&su=Consulta&body=Hola Amanda, he visto tu portafolio"
                target="_blank"
              >
                <MdEmail />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="copy text-center">
            <hr />
            <p>© Copyright 2025 - Realizado por Amanda Gómez Quero</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
