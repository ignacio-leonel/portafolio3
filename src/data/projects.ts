import { Project, OtherProject } from '../types';

export const mainProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce API REST",
    objective: "Crear una API robusta para comercio electrónico con autenticación completa",
    description: "Sistema completo de e-commerce con gestión de usuarios, productos, carrito de compras, órdenes y pagos. Implementa autenticación JWT, validaciones, middleware de seguridad y documentación completa con Swagger.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
    github: "https://github.com/ignacio-leonel/ecommerce-api",
    demo: "https://ecommerce-api-demo.vercel.app",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    chapters: [
      {
        id: 1,
        title: "Autenticación JWT",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        images: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        objective: "Implementar sistema de autenticación seguro",
        description: "Sistema completo de registro, login y protección de rutas usando JSON Web Tokens con refresh tokens y middleware de autorización.",
        technologies: ["JWT", "bcrypt", "Express.js"]
      },
      {
        id: 2,
        title: "Gestión de Productos",
        image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        images: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg",
        objective: "CRUD completo de productos",
        description: "Sistema de gestión de productos con categorías, imágenes, stock, precios y filtros avanzados con paginación.",
        technologies: ["PostgreSQL", "Multer", "Express.js"]
      },
      {
        id: 3,
        title: "Carrito & Checkout",
        image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        images: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg",
        objective: "Sistema de compras completo",
        description: "Implementación de carrito de compras, proceso de checkout y integración con pasarelas de pago.",
        technologies: ["Stripe", "Node.js", "PostgreSQL"]
      }
    ]
  },
  {
    id: 2,
    title: "Task Management API",
    objective: "API para gestión avanzada de tareas y proyectos",
    description: "Sistema completo de gestión de tareas con asignación de usuarios, estados, fechas límite, comentarios y notificaciones en tiempo real.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Redis"],
    github: "https://github.com/ignacio-leonel/task-api",
    demo: "https://task-api-demo.vercel.app",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    chapters: [
      {
        id: 1,
        title: "Arquitectura MVC",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        images: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        objective: "Estructura modular y escalable",
        description: "Implementación de arquitectura MVC con controladores, modelos, rutas y middleware organizados de forma modular.",
        technologies: ["Express.js", "MongoDB", "Mongoose"]
      },
      {
        id: 2,
        title: "WebSockets Real-time",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        images: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        objective: "Comunicación en tiempo real",
        description: "Sistema de notificaciones en tiempo real usando Socket.IO para actualizaciones instantáneas de tareas.",
        technologies: ["Socket.IO", "Redis", "Node.js"]
      },
      {
        id: 3,
        title: "Sistema de Roles",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
        images: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
        objective: "Control de acceso por roles",
        description: "Implementación de sistema de roles y permisos para diferentes tipos de usuarios y proyectos.",
        technologies: ["JWT", "MongoDB", "bcrypt"]
      }
    ]
  },
  {
    id: 3,
    title: "Blog API with CMS",
    objective: "API REST para blog con panel de administración",
    description: "Sistema completo de blog con gestión de contenido, comentarios, categorías, tags y panel de administración con dashboard analítico.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/ignacio-leonel/blog-cms-api",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg",
    chapters: [
      {
        id: 1,
        title: "FastAPI Setup",
        image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
        images: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
        objective: "Configuración de FastAPI",
        description: "Setup inicial de FastAPI con documentación automática, validaciones Pydantic y estructura de proyecto.",
        technologies: ["FastAPI", "Pydantic", "Python"]
      },
      {
        id: 2,
        title: "Content Management",
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
        images: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
        objective: "Sistema de gestión de contenido",
        description: "CRUD completo para posts, categorías, tags y gestión de medios con upload de imágenes.",
        technologies: ["SQLAlchemy", "PostgreSQL", "Cloudinary"]
      },
      {
        id: 3,
        title: "Analytics Dashboard",
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
        images: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
        objective: "Dashboard con métricas",
        description: "Panel de control con estadísticas de posts, usuarios activos, comentarios y análisis de tráfico.",
        technologies: ["Redis", "PostgreSQL", "Chart.js"]
      }
    ]
  }
];

export const otherProjects: OtherProject[] = [
  {
    id: 1,
    title: "Weather API Service",
    objective: "Servicio de pronóstico del tiempo con geolocalización",
    description: "API que consume múltiples servicios meteorológicos, cachea resultados y proporciona pronósticos precisos con geolocalización.",
    technologies: ["Node.js", "Express.js", "Redis", "OpenWeather API"],
    github: "https://github.com/ignacio-leonel/weather-api",
    demo: "https://weather-api-demo.vercel.app",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
  },
  {
    id: 2,
    title: "URL Shortener",
    objective: "Acortador de URLs con analytics",
    description: "Servicio para acortar URLs con seguimiento de clicks, estadísticas detalladas y expiración automática.",
    technologies: ["Python", "Flask", "PostgreSQL", "Redis"],
    github: "https://github.com/ignacio-leonel/url-shortener",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  },
  {
    id: 3,
    title: "Chat API WebSocket",
    objective: "API de chat en tiempo real",
    description: "Sistema de chat con rooms, mensajes privados, historial persistente y notificaciones push.",
    technologies: ["Node.js", "Socket.IO", "MongoDB", "JWT"],
    github: "https://github.com/ignacio-leonel/chat-websocket",
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg"
  },
  {
    id: 4,
    title: "File Upload Service",
    objective: "Servicio de subida y gestión de archivos",
    description: "API para upload, procesamiento y gestión de archivos con compresión automática y CDN integration.",
    technologies: ["Node.js", "Multer", "Sharp", "AWS S3"],
    github: "https://github.com/ignacio-leonel/file-service",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
  }
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
  { name: "Redis", icon: "🔴", color: "from-red-400 to-red-600" },
  { name: "JWT", icon: "🔐", color: "from-orange-400 to-red-500" },
  { name: "Socket.IO", icon: "🔌", color: "from-purple-500 to-indigo-600" },
  { name: "FastAPI", icon: "⚡", color: "from-teal-400 to-blue-500" },
  { name: "SQL", icon: "📊", color: "from-indigo-400 to-purple-500" },
  { name: "Vercel", icon: "▲", color: "from-black to-gray-800" }
];