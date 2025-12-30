import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

import { PortadaSection } from './sections/PortadaSection';
import { Navbar } from './components/Navbar/Navbar';
import { FooterSection } from './sections/FooterSection';
import { ContactoSection } from './sections/ContactoSection';
import { SobreMiSections } from './sections/SobreMiSections';
import { Proyectos } from './sections/Proyectos';
import { Skills } from './sections/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };


  const animaciones = document.querySelectorAll('.animacion');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // activa la animación
      observer.unobserve(entry.target); // opcional: deja de observar
    }
  });
}, {
  threshold: 0.1 // se dispara cuando el 10% del elemento es visible
});

animaciones.forEach(anim => observer.observe(anim));

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <PortadaSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SobreMiSections />
        <Proyectos />
        <Skills />
        <ContactoSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
