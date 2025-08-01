import React, { useState, useEffect } from 'react';
import { otherProjects } from '../data/projects';
import { Modal } from './Modal';
import { motion } from 'framer-motion';

export const OtrosProyectos: React.FC = () => {
  const [selectedModal, setSelectedModal] = useState<any>(null);
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

    const element = document.getElementById('otros-proyectos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openModal = (project: any) => {
    setSelectedModal(project);
  };

  return (
    <section id="otros-proyectos" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Título animado con degradé */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
          >
            Otros Proyectos
          </motion.h2>

          {/* Párrafo estilizado */}
          <motion.p
            className="italic text-gray-100 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Estos <strong>proyectos</strong> no están directamente alineados con mi enfoque actual como <strong>backend engineer</strong>,
            pero representan <strong>puntos de partida</strong> esenciales: fueron el espacio donde apliqué lo aprendido,
            resolví <strong>desafíos reales</strong> y consolidé <strong>conocimientos técnicos</strong> que hoy forman parte de mi <strong>día a día</strong>.
          </motion.p>

          {/* Tarjetas 50% */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.objective}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full text-xs border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-gray-600/20 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-500/30">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Ver detalles →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <Modal
          isOpen={!!selectedModal}
          onClose={() => setSelectedModal(null)}
          title={selectedModal.title}
          images={selectedModal.images}
          objective={selectedModal.objective}
          description={selectedModal.description}
          technologies={selectedModal.technologies}
          github={selectedModal.github}
          demo={selectedModal.demo}
        />
      )}

      {/* Line clamp CSS */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};
