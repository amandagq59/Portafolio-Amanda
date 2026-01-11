import React, { useRef, useState, useEffect } from 'react';
import '../Navbar/navbar.css';
import { FaMoon, FaPause, FaBars, FaTimes } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { IoMusicalNotes } from 'react-icons/io5';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(() => {
    return localStorage.getItem('isPlaying') === 'true'
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
      {/* Barra superior */}
      <div className="container navbar-top">
        {/* Hamburguesa izquierda */}
        {!isMenuOpen && (
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        )}

        {/* Iconos derecha (responsive) */}
        <div className="navbar-icons">
          <button onClick={toggleDarkMode} aria-label="Modo oscuro">
            {darkMode ? <MdSunny /> : <FaMoon />}
          </button>

          <button onClick={toggleMusic} aria-label="Música">
            <audio ref={audioRef} src="/audio/cancion.mp3" />
            {isPlaying ? <FaPause /> : <IoMusicalNotes />}
          </button>
        </div>

        {/* Cerrar menú */}
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
        <a href="#conoceme" className="nav-link" onClick={closeMenu}>
          Conóceme
        </a>
        <a href="#proyectos" className="nav-link" onClick={closeMenu}>
          Proyectos
        </a>
        <a href="#skills" className="nav-link" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contacto" className="nav-link" onClick={closeMenu}>
          ¿Hablamos?
        </a>
        <a
          href="/images/recomendaciones/cv.pdf"
          className="nav-link"
          download
          onClick={closeMenu}
        >
          Descárgate mi CV
        </a>

        {/* Iconos dentro del menú (solo desktop si quieres) */}
        <div className="buttons-icons">
          <button onClick={toggleDarkMode}>
            {darkMode ? <MdSunny /> : <FaMoon />}
          </button>
          <button onClick={toggleMusic}>
            {isPlaying ? <FaPause /> : <IoMusicalNotes />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};
