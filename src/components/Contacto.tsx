import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Download, Linkedin, MessageCircle } from 'lucide-react';

export const Contacto: React.FC = () => {
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

    const element = document.getElementById('contacto');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ignacio.lm1991@gmail.com",
      link: "mailto:ignacio.lm@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+54 9 11 3933-9046",
      link: "tel:+5491139339046"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/ignacio-leonel",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/ignaciomaldo",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      link: "https://wa.me/5491139339046",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contacto
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-8">¡Trabajemos Juntos!</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estoy disponible para nuevos proyectos y oportunidades. Si tienes una idea 
                  interesante o necesitas un desarrollador backend, no dudes en contactarme.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.label}
                      className={`transition-all duration-500 ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-5'
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                    >
                      <div className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                        <div className="text-cyan-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-white hover:text-cyan-400 transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redes sociales y CTA */}
              <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Sígueme en mis redes</h3>
                  
                  <div className="space-y-4 mb-8">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      >
                        {social.icon}
                        <span className="text-white font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                  href="/cv-ignacio-maldonado.pdf"
                  download
                  className="flex items-center gap-2 bg-cyan-500/80 hover:bg-gray-700 text-white px-6 py-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-cyan-500"
                >
                  <Download size={20} />
                  Descargar CV
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-20 pt-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Ignacio Maldonado. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
};