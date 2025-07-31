import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Elementos flotantes animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="text-center z-10 px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Ignacio Maldonado
          </h1>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
              Backend Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Especializado en APIs REST, arquitecturas escalables y tecnologías backend modernas.
              Creando soluciones robustas que impulsan el futuro digital.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Ver Proyectos
                <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </button>
              
              <div className="flex gap-4">
                
                
                <div className="relative group">
                  <a
                    href="https://wa.me/5491234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle size={22} />
                    WhatsApp
                  </a>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Contáctame
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        
        
      </div>
    </section>
  );
};