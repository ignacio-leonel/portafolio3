import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Globe } from 'lucide-react';

export const About: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Especializado en Node.js, Express.js, Python y FastAPI para crear APIs robustas y escalables."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos",
      description: "Experiencia con PostgreSQL, MongoDB y Redis para diseño de esquemas eficientes y optimización."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Arquitectura de Software",
      description: "Diseño de arquitecturas MVC, microservicios y patrones de diseño para aplicaciones escalables."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DevOps & Deployment",
      description: "Implementación con Docker, CI/CD y despliegue en plataformas cloud como Vercel y AWS."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Sobre Mí
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Información personal */}
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Backend Engineer</h3>
  <p className="text-gray-300 leading-relaxed mb-6">
    Soy un desarrollador backend apasionado por crear soluciones tecnológicas robustas y escalables. 
    
  </p>
   <p className="text-gray-300 leading-relaxed mb-6">
    
    Actualmente estudio la Licenciatura en Gestión de Tecnologías de la Información en la UNPAZ, 
    y complementé mi formación con cursos virtuales que me permitieron adquirir los conocimientos 
    que hoy aplico en mis desarrollos.
  </p>
  <p className="text-gray-300 leading-relaxed mb-6">
    Tengo experiencia en el diseño de bases de datos, desarrollo de APIs REST, implementación de sistemas de 
    autenticación seguros y arquitectura orientada a microservicios, priorizando siempre la calidad del código 
    y las buenas prácticas.
  </p>
  <p className="text-gray-300 leading-relaxed">
    Me mantengo en constante aprendizaje para incorporar nuevas tecnologías, metodologías ágiles 
    y herramientas del ecosistema backend, buscando siempre ofrecer soluciones innovadoras y eficientes.
  </p>
</div>
</div>
              {/* Skills */}
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className={`transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mt-1">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {skill.description}
                          </p>
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
    </section>
  );
};