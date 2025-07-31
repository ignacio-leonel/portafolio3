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
    image: "/images/stock/gestionstock.png",
    images: [
      "/images/stock/admin.png", "/images/stock/venta.png",
    ],
    chapters: [
      {
        id: 1,
        title: "Modularización es Escalabilidad",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: ["/images/stock/capitulo4/get.png", "/images/stock/capitulo4/post.png", "/images/stock/capitulo4/delete.png","/images/stock/capitulo4/put.png","/images/stock/capitulo4/visualstudio.png"],
        objective: "Preparar la estructura de carpetas y módulos. Conectar las rutas",
        description: "Preparacion de la estructura de carpetas y módulos. Conexión de rutas y middleware para una API escalable.",
        technologies: ["Node.js", "Postman", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: ["/images/stock/capitulo4/get.png", "/images/stock/capitulo4/post.png", "/images/stock/capitulo4/delete.png","/images/stock/capitulo4/put.png","/images/stock/capitulo4/visualstudio.png"],
        objective: "CRUD completo de productos",
        description: "Sistema de gestión de productos con categorías, imágenes, precios y filtros avanzados.",
        technologies: ["Node.js", "Express.js"]
      },
      {
        id: 3,
        title: "Los datos, organizados",
        image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        images: ["/images/stock/capitulo3/delete.png", "/images/stock/capitulo3/get.png", "/images/stock/capitulo3/post.png"],
        objective: "Integrar a PostgreSQL",
        description: "Base de datos PostgreSQL para almacenar productos, usuarios y órdenes. Implementación de relaciones validadas y consultas eficientes. ",
        technologies: ["Node.js", "PostgreSQL", "Sequelize", "Postman"]
      },
       {
        id: 3,
        title: "Control de Usuarios",
        image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        images: ["/images/stock/capitulo4/get.png", "/images/stock/capitulo4/post.png", "/images/stock/capitulo4/delete.png","/images/stock/capitulo4/put.png","/images/stock/capitulo4/visualstudio.png"],
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
    image: "/images/alumnos/gestionalumnos.png",
    images: [ "/images/alumnos/gestionacademica1.png", "/images/alumnos/gestionacademica2.png", "/images/alumnos/gestionacademica4.png"],
    chapters: [
      {
        id: 1,
        title: "Modularización es Escalabilidad",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: ["/images/stock/capitulo4/get.png", "/images/stock/capitulo4/post.png", "/images/stock/capitulo4/delete.png","/images/stock/capitulo4/put.png","/images/stock/capitulo4/visualstudio.png"]
,
        objective: "Preparar la estructura de carpetas y módulos. Conectar las rutas",
        description: "Preparacion de la estructura de carpetas y módulos. Conexión de rutas y middleware para una API escalable.",
        technologies: ["Node.js", "Postman", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: ["/images/stock/capitulo4/get.png", "/images/stock/capitulo4/post.png", "/images/stock/capitulo4/delete.png","/images/stock/capitulo4/put.png","/images/stock/capitulo4/visualstudio.png"],
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