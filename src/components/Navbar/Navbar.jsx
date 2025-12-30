import React, { useRef, useState, useEffect } from 'react';
import '../Navbar/navbar.css';
import { FaMoon, FaPlay, FaPause, FaBars, FaTimes } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { IoMusicalNotes } from 'react-icons/io5';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(() => {
    return localStorage.getItem('isPlaying') === 'true';
  });
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();
    setIsPlaying((prev) => {
      localStorage.setItem('isPlaying', !prev);
      return !prev;
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) playPromise.catch(() => {});
    }
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [isPlaying]);

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        {/* Botón hamburguesa a la izquierda solo si está cerrado */}
        {!isMenuOpen && (
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        )}

        {/* Contenedor vacío para mantener el espacio */}
        <div className="flex-grow-1"></div>

        {/* Botón cerrar a la derecha solo si el menú está abierto */}
        {isMenuOpen && (
          <button
            className="close-menu"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Menú lateral */}
      <div className={`nav-links mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a
          href="#conoceme"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Conóceme
        </a>
        <a
          href="#proyectos"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Proyectos
        </a>
        <a
          href="#skills"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#contacto"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          ¿Hablamos?
        </a>
        <a
          href="/images/recomendaciones/cv.pdf"
          className="nav-link"
          download
          onClick={() => setIsMenuOpen(false)}
        >
          Descárgate mi CV
        </a>
        <div className="buttons-icons  d-flex gap-4">
          <button className="" onClick={toggleDarkMode}>
            {darkMode ? <MdSunny /> : <FaMoon />}
          </button>
          <button className="" onClick={toggleMusic}>
            <audio ref={audioRef} src="/audio/cancion.mp3" />
            {isPlaying ? <FaPause /> : <IoMusicalNotes />}
          </button>
        </div>
      </div>
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
   
  );
};
