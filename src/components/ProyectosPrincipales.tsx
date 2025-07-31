import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { mainProjects } from '../data/projects';
import { Modal } from './Modal';
import type { Chapter } from '../types';
import { motion } from 'framer-motion';

export const ProyectosPrincipales: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedModal, setSelectedModal] = useState<{ type: 'project' | 'chapter', data: any } | null>(null);
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

    const element = document.getElementById('proyectos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const currentProject = mainProjects[selectedProject];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % mainProjects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + mainProjects.length) % mainProjects.length);
  };

  const openProjectModal = () => {
    setSelectedModal({ type: 'project', data: currentProject });
  };

  const openChapterModal = (chapter: Chapter) => {
    setSelectedModal({ type: 'chapter', data: chapter });
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Proyectos Principales
          </h2>
          <motion.p
  className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
            Estos proyectos representan mi enfoque actual como Backend Engineer, donde aplico mis habilidades en desarrollo de APIs, bases de datos y arquitecturas escalables.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Proyecto Principal - 75% */}
            <div className="lg:w-3/4">
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative group">
                  <div 
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50"
                    onClick={openProjectModal}
                  >
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                      
                      {/* Overlay con información */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {currentProject.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-4 line-clamp-2">
                          {currentProject.objective}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {currentProject.technologies.length > 3 && (
                            <span className="bg-gray-600/20 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-500/30">
                              +{currentProject.technologies.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navegación */}
                  {mainProjects.length > 1 && (
                    <>
                      <button
                        onClick={prevProject}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextProject}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Indicador de proyecto actual */}
                <div className="flex justify-center mt-6 gap-2">
                  {mainProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedProject
                          ? 'bg-cyan-400 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Carrousel de Capítulos - 25% */}
            <div className="lg:w-1/4">
              <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-6">Capítulos</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {currentProject.chapters.map((chapter, index) => (
                    <div
                      key={chapter.id}
                      className="group cursor-pointer"
                      onClick={() => openChapterModal(chapter)}
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="relative h-24 overflow-hidden">
                          <img
                            src={chapter.image}
                            alt={chapter.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
                          <div className="absolute inset-0 flex items-center">
                            <div className="p-4">
                              <h4 className="text-white font-semibold text-sm line-clamp-2">
                                {chapter.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <Modal
          isOpen={!!selectedModal}
          onClose={() => setSelectedModal(null)}
          title={selectedModal.data.title}
          objective={selectedModal.data.objective}
          images={selectedModal.data.images}
          description={selectedModal.data.description}
          technologies={selectedModal.data.technologies}
          github={selectedModal.type === 'project' ? selectedModal.data.github : undefined}
          demo={selectedModal.type === 'project' ? selectedModal.data.demo : undefined}
        />
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #06B6D4;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0891B2;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};