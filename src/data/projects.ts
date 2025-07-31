import { Project, OtherProject } from '../types';

export const mainProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce API REST",
    objective: "Crear una API robusta para comercio electrónico con autenticación completa",
    description: "Sistema completo de e-commerce con gestión de usuarios, productos, carrito de compras, órdenes y pagos. Implementa autenticación JWT, validaciones, middleware de seguridad y documentación completa con Swagger.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
    github: "https://github.com/ignacio-leonel/sistemaGestionComercial",
    demo: "",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    images: [
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
      "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg"
    ],
    chapters: [
      {
        id: 1,
        title: "Modularización es Escalabilidad",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        objective: "Preparar la estructura de carpetas y módulos. Conectar las rutas",
        description: "Preparacion de la estructura de carpetas y módulos. Conexión de rutas y middleware para una API escalable.",
        technologies: ["Node.js", "Postman", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        objective: "CRUD completo de productos",
        description: "Sistema de gestión de productos con categorías, imágenes, precios y filtros avanzados.",
        technologies: ["Node.js", "Express.js"]
      },
      {
        id: 3,
        title: "Los datos, organizados",
        image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        images: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        objective: "Integrar a PostgreSQL",
        description: "Base de datos PostgreSQL para almacenar productos, usuarios y órdenes. Implementación de relaciones validadas y consultas eficientes. ",
        technologies: ["Node.js", "PostgreSQL", "Sequelize", "Postman"]
      },
       {
        id: 3,
        title: "Control de Usuarios",
        image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        images: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        objective: "Sistema de compras completo",
        description: "Implementación de carrito de compras, proceso de gestion de stock luego de la compra y gestión de órdenes.",
        technologies: ["Stripe", "Node.js", "PostgreSQL"]
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
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    images: ["https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"],
    chapters: [
      {
        id: 1,
        title: "Modularización es Escalabilidad",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        objective: "Preparar la estructura de carpetas y módulos. Conectar las rutas",
        description: "Preparacion de la estructura de carpetas y módulos. Conexión de rutas y middleware para una API escalable.",
        technologies: ["Node.js", "Postman", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
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
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    images: ["https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"]
  },
  {
    id: 3,
    title: "Sitio Web con Carrito simple a WhatsApp",
    objective: "Aumento de volumen de ventas",
    description: "Sistema para integrar en tiendas de barrio, con un carrito simple que permite al usuario seleccionar productos y enviarlos por WhatsApp al dueño del negocio. Permite aumentar el volumen de ventas y ahorra tiempo al cliente.",
    technologies: ["React", "Tailwind", "Vercel", "Vite"],
    github: "https://github.com/ignacio-leonel/pasteleria",
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg",
    images: ["https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg"],
  },
 
];

export const technologies = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
  { name: "Express.js", icon: "🚀", color: "from-gray-400 to-gray-600" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-500" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
  { name: "Vue.js", icon: "💚", color: "from-green-400 to-green-600" },
  { name: "Vite", icon: "⚡", color: "from-purple-400 to-pink-400" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
  { name: "Postman", icon: "🔴", color: "from-red-400 to-red-600" },
  { name: "JWT", icon: "🔐", color: "from-orange-400 to-red-500" },
  { name: "Socket.IO", icon: "🔌", color: "from-purple-500 to-indigo-600" },
  { name: "FastAPI", icon: "⚡", color: "from-teal-400 to-blue-500" },
  { name: "SQL", icon: "📊", color: "from-indigo-400 to-purple-500" },
  { name: "Vercel", icon: "▲", color: "from-black to-gray-800" }
];