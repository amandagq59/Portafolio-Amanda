import React, { useState } from 'react';
import './contactoSection.css';
import { Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithubSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const ContactoSection = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const numero = '662110060';

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || sending) return;

    setSending(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type');
      const hasJSON = contentType && contentType.includes('application/json');
      const data = hasJSON ? await res.json() : null;

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      } else if (res.status === 429) {
        setError('Demasiadas solicitudes. Por favor, inténtalo más tarde.');
      } else if (res.status === 400 && data?.error) {
        setError(`Error en el formulario: ${data.error}`);
      } else {
        setError(
          `Error al enviar el mensaje. Por favor, inténtalo de nuevo.${
            data?.error ? ` ${data.error}` : ''
          }`
        );
      }
    } catch (err) {
      console.error('Network or unexpected error:', err);
      setError(
        'Error de conexión. Por favor, verifica tu conexión a internet.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section-contacto d-flex flex-column py-4" id="contacto">
      <h3 className="text-center mt-5">¿Hablamos?</h3>
      <div className="linea-lateral-azul"></div>

      <div className="container">
        <div className="row">
          {/* Información de contacto */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="text-contacto mb-4 ms-lg-5">
              <p>
                ¡Gracias por visitar mi portafolio! <br />
                Si quieres contactarme, ya sea por oportunidades laborales,
                proyectos, colaboraciones o cualquier consulta relacionada con
                mi trabajo, estaré encantada de recibir tu mensaje.
              </p>
            </div>

            <div className="icons-contacto d-flex flex-column ms-lg-5">
              {/* Linkedin */}
              <div className="d-flex mb-3 align-items-start ">
                <span className="span1 me-2">
                  <FaLinkedin />
                </span>

                <div className="mt-3">
                  <p>
                    Linkedin: <br />
                    <a
                      className="a-color"
                      href="https://www.linkedin.com/in/amanda-g%C3%B3mez-quero/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/amanda-gómez-quero
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-start">
                <span className="span2 me-2">
                  <MdEmail />
                </span>
                <div className="mt-3">
                  <p>
                    Correo electrónico: <br />
                    <a
                      className="a-color"
                      href="https://mail.google.com/mail/?view=cm&to=amanda1758@gmail.com&su=Consulta&body=Hola Amanda, he visto tu portafolio"
                      target="_blank"
                    >
                      amanda1758@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="d-flex mb-3 align-items-star">
                <span className="span3 me-2">
                  <FaPhoneSquareAlt />
                </span>
                <div className="mt-3">
                  <p>
                    Teléfono de contacto: <br />
                    <span
                      onClick={() => setVisible(true)}
                      className="text-number"
                      style={{ cursor: 'pointer' }}
                    >
                      {visible ? numero : 'Haz clic para mostrar'}
                    </span>
                  </p>
                </div>
              </div>

              {/* Github */}
              <div className="d-flex mb-3 align-items-start">
                <span className="me-2">
                  <FaGithubSquare />
                </span>

                <div className="mt-3">
                  <p>
                    Github: <br />
                    <a
                      className="a-color"
                      href="https://github.com/amandagq59"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/amandagq59
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-6 col-md-12 mt-lg-5">
            <Form className="form-contacto" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formNombre">
                <Form.Label className="fw-semibold">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  className="rounded-3 py-2"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className=" fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tu@email.com"
                  className="rounded-3 py-2"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMensaje">
                <Form.Label className="fw-semibold">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Cuéntame sobre tu idea o proyecto..."
                  className="rounded-3"
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                />
              </Form.Group>

              <div className="d-grid mt-4">
                {error && <p className="text-danger">{error}</p>}
                {success && (
                  <p className="text-success mb-2">
                    Mensaje enviado correctamente.
                  </p>
                )}
                <button
                  className="button-enviar"
                  size="lg"
                  type="submit"
                  disabled={!isFormValid || sending}
                >
                  {sending ? 'Enviando mensaje...' : 'Enviar mensaje'}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
