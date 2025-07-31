import { Project, OtherProject } from '../types';

export const mainProjects: Project[] = [
  {
  "id": 1,
  "title": "Sistema de Gestión Comercial - API REST",
  "objective": "Desarrollar una API robusta y modular para la gestión integral de ventas, productos y usuarios, con autenticación y control de stock.",
  "description": "Backend completo para un sistema de gestión comercial orientado a pequeños negocios. Incluye arquitectura modular con Node.js y Express, conexión a base de datos PostgreSQL, autenticación y autorización mediante JWT, control de stock en tiempo real, validaciones sólidas de entrada, y controladores organizados para mantener la escalabilidad. Se implementaron middlewares personalizados, seguridad por roles, y lógica de ventas con actualización automática de stock. Ideal como base para integrar con un frontend moderno.",
  "technologies": ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
  "github": "https://github.com/ignacio-leonel/sistemaGestionComercial",
  "demo": "",
  "image": "/images/stock/gestionstock.png",
  "images": [
    "/images/stock/admin.png",
    "/images/stock/venta.png"
    ],
    chapters: [
      {
       "id": 1,
  "title": "Modularización es Escalabilidad",
  "image": "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
  "images": ["/images/stock/capitulo1/carpetas.jpeg"],
  "objective": "Diseñar una arquitectura de backend modular, escalable y preparada para la integración con base de datos.",
  "description": "Inicio del desarrollo backend del sistema de gestión comercial, utilizando Node.js, Express y PostgreSQL. Se configuró el servidor y se definió una estructura clara y escalable basada en capas (controllers, services, routes y models), permitiendo una fácil mantenibilidad y crecimiento del proyecto. El servidor quedó operativo en el puerto 4000 y listo para establecer conexión con la base de datos.",
  "technologies": ["Node.js", "Postman", "Express.js"]
      },
      {
          "id": 2,
  "title": "Gestión de Productos",
  "image": "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
  "images": [
    "/images/stock/capitulo2/cap2.jpeg",
    "/images/stock/capitulo2/cap2.1.jpeg",
    "/images/stock/capitulo2/cap2.3.jpeg",
    "/images/stock/capitulo2/ca2.4.jpeg"
  ],
  "objective": "Implementar el CRUD completo de productos, conectando rutas y controladores de forma clara y eficiente.",
  "description": "Segunda etapa del backend del sistema de gestión comercial, enfocada en la implementación del CRUD de productos. Se desarrollaron las rutas y controladores necesarios para crear, leer, actualizar y eliminar productos, asegurando la correcta respuesta del servidor ante cada solicitud. La arquitectura modular sigue consolidándose para facilitar escalabilidad y mantenimiento. Esta base permite avanzar hacia la validación de datos y la persistencia real en PostgreSQL.",
  "technologies": ["Node.js", "Express.js"]
      },
      {
        "id": 3,
  "title": "Validaciones y Conexión Sólida",
  "image": "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
  "images": [
    "/images/stock/capitulo3/delete.png",
    "/images/stock/capitulo3/get.png",
    "/images/stock/capitulo3/post.png"
  ],
  "objective": "Agregar validaciones a los endpoints de productos y optimizar la integración con PostgreSQL.",
  "description": "Tercera etapa del backend del sistema de gestión comercial, centrada en la robustez y calidad de los datos. Se incorporaron validaciones detalladas para los inputs de productos y se reforzó el control de errores, permitiendo respuestas claras y seguras ante entradas inválidas. Además, se optimizó la conexión con PostgreSQL, asegurando la integridad de los datos y la consistencia en cada operación. La estructura modular se mantiene firme, preparada para futuras funcionalidades.",
  "technologies": ["Node.js", "PostgreSQL", "Sequelize", "Postman"]
      },
       {
       "id": 4,
  "title": "Autenticación y Control de Stock en Ventas",
  "image": "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  "images": [
    "/images/stock/capitulo4/middleware.png",
    "/images/stock/capitulo4/controlador-venta.png",
    "/images/stock/capitulo4/get-stock.png",
    "/images/stock/capitulo4/post-venta.png",
    "/images/stock/capitulo4/pgadmin-stock.png"
  ],
  "objective": "Implementar autenticación, autorización y lógica de validación de stock para registrar ventas de forma segura.",
  "description": "Cuarta etapa del backend del sistema de gestión comercial, enfocada en reforzar la seguridad y la integridad de los datos. Se incorporó autenticación mediante JWT para proteger los endpoints sensibles, y un middleware de autorización que restringe el acceso a ciertas rutas según el rol del usuario. Además, se desarrolló la lógica de validación de stock antes de registrar ventas, actualizando correctamente los valores en la base de datos tras cada operación. La estructura modular permite mantener controladores, middlewares y rutas organizados, facilitando futuras escalas del sistema.",
  "technologies": ["Node.js", "PostgreSQL", "JWT", "Express.js", "Postman"]
      }
      
    ]
  },
   {
    id: 1,
    title: "Sistema de Gestión Académica",
    objective: "Organizar alumnos, carreras y materias",
    description: "Este es un sistema en desarrollo para gestionar alumnos, carreras y materias en una institución académica. Está construido con Python, utilizando principios de programación estructurada y orientada a objetos, y cuenta con persistencia de datos mediante SQLite.",
    technologies: ["Python", "SQLite", "OOP"],
    github: "Este es un sistema en desarrollo para gestionar alumnos, carreras y materias en una institución académica. Está construido con Python, utilizando principios de programación estructurada y orientada a objetos, y cuenta con persistencia de datos mediante SQLite.",
    image: "/images/alumnos/gestionalumnos.png",
    images: [ "/images/alumnos/gestionacademica1.png", "/images/alumnos/gestionacademica2.png", "/images/alumnos/gestionacademica4.png"],
    chapters: [
      {
        id: 1,
        title: "Modularización es Escalabilidad",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: ["/images/stock/capitulo1/carpetas.jpeg"]
,
        objective: "Preparar la estructura de carpetas y módulos. Conectar las rutas",
        description: "Preparacion de la estructura de carpetas y módulos. Conexión de rutas y middleware para una API escalable.",
        technologies: ["Node.js", "Postman", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: ["/images/stock/capitulo2/ca2.jpeg", "/images/stock/capitulo2/ca2.1.jpeg", "/images/stock/capitulo2/ca2.2.jpeg","/images/stock/capitulo2/ca2.3.jpeg","/images/stock/capitulo2/ca2.4.jpeg"],
        objective: "CRUD completo de productos",
        description: "Sistema de gestión de productos con categorías, imágenes, precios y filtros avanzados.",
        technologies: ["Node.js", "Express.js"]
      },
      
       
      
    ]
    
  },
  
];

export const otherProjects: OtherProject[] = [
 
  {
    id: 2,
    title: "Sitio Web profesional para cliente",
    objective: "Sitio web para Juan Mosman",
    description: "Luego de la entrevista con el cliente, diseñe este sitio de acuerdo a sus necesidades, de mostrar su trabajo organizado, contar sobre sus promociones tener distintos canales de contacto en el mismo sitio. Indexado a google con dominio propio.",
    technologies: ["React", "Tailwind CSS", "Vite", "Node.js", "cloudflare", "verce"],
    demo:"https://www.juanjosemosman.com.ar",
    github:"",
    image: "/images/profesional/hero.png",
    images: ["images/profesional/hero.png", "/images/profesional/gallery.png", "/images/profesional/modal.png","/images/profesional/contacto.png"],
  },
  {
    id: 3,
    title: "Sitio Web con Carrito simple a WhatsApp",
    objective: "Aumento de volumen de ventas",
    description: "Sistema para integrar en tiendas de barrio, con un carrito simple que permite al usuario seleccionar productos y enviarlos por WhatsApp al dueño del negocio. Permite aumentar el volumen de ventas y ahorra tiempo al cliente.",
    technologies: ["React", "Tailwind", "Vercel", "Vite"],
    github: "https://github.com/ignacio-leonel/pasteleria",
    image: "/images/pasteleria/hero.jpg",
    images: ["/images/pasteleria/about.jpg", "/images/pasteleria/gallery.jpg","images/pasteleria/hero.jpg"],
  },
 
];

export const technologies = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
  { name: "Express.js", icon: "🚀", color: "from-gray-400 to-gray-600" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
  { name: "Vue.js", icon: "💚", color: "from-green-400 to-green-600" },
  { name: "Postman", icon: "🔴", color: "from-red-400 to-red-600" }

];