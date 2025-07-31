import React, { useState } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[]; // CAMBIO: ahora es un array
  objective: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  objective,
  description,
  technologies,
  github,
  demo
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const techColors: Record<string, string> = {
    "Node.js": "bg-green-500/20 text-green-300 border-green-500/30",
    "Express.js": "bg-gray-500/20 text-gray-300 border-gray-500/30",
    "React": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Python": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "PostgreSQL": "bg-blue-600/20 text-blue-400 border-blue-600/30",
    "MongoDB": "bg-green-600/20 text-green-400 border-green-600/30",
    "JWT": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Socket.IO": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Redis": "bg-red-500/20 text-red-300 border-red-500/30",
    "FastAPI": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Docker": "bg-blue-400/20 text-blue-300 border-blue-400/30"
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900/95 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl relative">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Carrusel de imágenes */}
          {images.length > 0 && (
            <div className="mb-6 relative">
              <img
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1}`}
                className="w-full rounded-lg object-cover max-h-[300px]"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/50 hover:bg-black/70 text-white rounded-l"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/50 hover:bg-black/70 text-white rounded-r"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Objetivo</h3>
              <p className="text-gray-300">{objective}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Descripción</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      techColors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  Ver GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  Ver Proyecto
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
