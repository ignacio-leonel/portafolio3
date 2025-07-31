import React from 'react';
import { Hero } from './components/Hero';
import { ProyectosPrincipales } from './components/ProyectosPrincipales';
import { OtrosProyectos } from './components/OtrosProyectos';
import { Tecnologias } from './components/Tecnologias';
import { About } from './components/About';
import { Contacto } from './components/Contacto';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ProyectosPrincipales />
      <OtrosProyectos />
      <Tecnologias />
      <About />
      <Contacto />
    </div>
  );
}

export default App;