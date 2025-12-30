import React, { useEffect } from 'react';
import '../Navbar/navbar.css';

import { FaMoon } from 'react-icons/fa6';
import { MdSunny } from 'react-icons/md';
import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { IoMusicalNotes } from 'react-icons/io5';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(() => {
    return localStorage.getItem('isPlaying') === 'true';
  });

  const toggleMusic = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying((prev) => {
      localStorage.setItem('isPlaying', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay bloqueado por el navegador', error);
        });
      }
    }
  }, [isPlaying]);
  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container d-flex justify-content-center gap-3">
        <a href="#conoceme" className="nav-link">
          Conóceme
        </a>
        <a href="#proyectos" className="nav-link">
          Proyectos
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#contacto" className="nav-link">
          ¿Hablamos?
        </a>
        <a className="nav-link" href="/images/recomendaciones/cv.pdf" download>
          Descárgate mi CV
        </a>

        <button
          className="ms-5 bg-transparent border-0 text-white fs-5"
          onClick={toggleDarkMode}
        >
          {darkMode ? <MdSunny /> : <FaMoon />}
        </button>

        <button
          onClick={toggleMusic}
          className="bg-transparent border-0 text-white fs-5"
        >
          {isPlaying ? <FaPause /> : <IoMusicalNotes />}
        </button>
        <audio ref={audioRef} src="/audio/cancion.mp3" />
      </div>
    </nav>
  );
};
