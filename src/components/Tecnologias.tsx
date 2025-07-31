import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data/projects';

export const Tecnologias: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tecnologias');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tecnologias" className="py-20 bg-gray-900 ">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Título animado */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tecnologías <span className="text-cyan-400">que utilizo</span>
          </motion.h2>

          {/* Párrafo descriptivo animado */}
          <motion.p
            className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
          Soy un entusiasta creyente que no hay que ser especialista en ninguna tecnología, pero conocerlas lleva a poder elegir la que mejor se adapte a las necesidades.
          </motion.p>

          {/* Tecnologías */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50">
                  <div className={`text-4xl mb-3 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent filter group-hover:brightness-125 transition-all duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Efectos decorativos */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
