// Mock data for the products section
// This data is used to populate the product cards on the homepage and other sections of the website.
export const DataProducts = [
  {
    id: 1,
    nombre: "Mouse Dell MS3220",
    precio: 366.24,
    stock: 3,
    descripcion: "Mouse láser ergonómico con cable USB.",
    especificaciones: [
      "Resolución ajustable hasta 3200 DPI",
      "Conexión: USB",
      "Compatibilidad: Windows y macOS",
      "Diseño: Ergonómico",
      "Plug and Play",
    ],
    imagen: "/images/products/Mouse-Dell-MS3220/imagen-1.webp",
    alt: "Mouse Dell MS3220",
    marca: "Dell",
    categoria: "Accesorios",
    destacado: false,
  },
  {
    id: 2,
    nombre: "Mouse Dell WM126",
    precio: 549.36,
    stock: 2,
    descripcion: "Mouse inalámbrico compacto con receptor USB.",
    especificaciones: [
      "Conexión: Receptor USB inalámbrico",
      "Alimentación: Batería AA",
      "Compatibilidad: Windows y macOS",
      "Diseño: Compacto y portátil",
      "Plug and Play",
    ],
    imagen: "/images/products/Mouse-Dell-WM126/imagen-1.webp",
    alt: "Mouse Dell WM126",
    marca: "Dell",
    categoria: "Accesorios",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Teclado Logitech MX Mechanical",
    precio: 732.49,
    stock: 4,
    descripcion: "Teclado mecánico de perfil bajo con retroiluminación.",
    especificaciones: [
      "Conexión: USB y Bluetooth",
      "Compatibilidad: Windows y macOS",
      "Diseño: Resistente al desgaste",
      "Teclas: Mecánicas de perfil bajo",
      "Funciones multimedia integradas",
    ],
    imagen: "/images/products/Teclado-Logitech-MX-Mechanical/imagen-1.webp",
    alt: "Teclado Logitech MX Mechanical",
    marca: "Logitech",
    categoria: "Accesorios",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Audífonos Anker LifeQ20",
    precio: 1831.22,
    stock: 3,
    descripcion: "Audífonos over-ear con cancelación activa de ruido.",
    especificaciones: [
      "Conectividad: Bluetooth 5.0",
      "Cancelación activa de ruido (ANC)",
      "Duración de batería: Hasta 40 horas",
      "Micrófono integrado",
      "Diseño: Over-ear con almohadillas cómodas",
    ],
    imagen: "/images/products/Headphones-Anker-Life-Q20/imagen-1.webp",
    alt: "Audífonos Anker LifeQ20",
    marca: "Anker",
    categoria: "Audífonos",
    destacado: true,
  },
  {
    id: 5,
    nombre: "Audífonos Sony WH-CH520",
    precio: 915.61,
    stock: 0,
    descripcion: "Auriculares inalámbricos ligeros con sonido estéreo.",
    especificaciones: [
      "Conexión: Bluetooth",
      "Diseño: Diadema ajustable",
      "Sonido: Estéreo",
      "Compatibilidad: Dispositivos con Bluetooth",
      "Almohadillas suaves para mayor comodidad",
    ],
    imagen: "/images/products/Headphones-Sony-WH-CH520/imagen-1.webp",
    alt: "Audífonos Sony WH-CH520",
    marca: "Sony",
    categoria: "Audífonos",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Audífono Logitech H390",
    precio: 1318.47,
    stock: 3,
    descripcion: "Auriculares USB con micrófono y cancelación de ruido.",
    especificaciones: [
      "Conexión: USB-A",
      "Micrófono con cancelación de ruido",
      "Controles en el cable",
      "Compatibilidad: Windows y macOS",
      "Diseño: Over-ear con almohadillas acolchadas",
    ],
    imagen: "/images/products/Headphones-Logitech-H390/imagen-1.webp",
    alt: "Audífono Logitech H390",
    marca: "Logitech",
    categoria: "Audífonos",
    destacado: true,
  },
  {
    id: 7,
    nombre: "Cargador Dell 65W",
    precio: 1464.97,
    stock: 0,
    descripcion: "Cargador original Dell de 65W con conector USB-C.",
    especificaciones: [
      "Entrada: 100-240V",
      "Salida: Variable según modelo",
      "Conector: USB-C",
      "Compatibilidad: Modelos específicos de laptops",
      "Certificaciones de seguridad",
    ],
    imagen: "/images/products/Cargador-Dell-65WATTS/imagen-1.webp",
    alt: "Cargador Dell 65W",
    marca: "Dell",
    categoria: "Accesorios",
    destacado: false,
  },
  {
    id: 8,
    nombre: "Monitor Lenovo G27",
    precio: 10804.17,
    stock: 1,
    descripcion: "Monitor gaming de 27 pulgadas con 144Hz.",
    especificaciones: [
      "Tamaño: 27 pulgadas",
      "Resolución: 1920x1080 (Full HD)",
      "Tasa de refresco: 144Hz",
      "Conectividad: HDMI y DisplayPort",
      "Tiempo de respuesta: 1ms",
    ],
    imagen: "/images/products/Monitor-Lenovo-G27/imagen-1.webp",
    alt: "Monitor Lenovo G27",
    marca: "Lenovo",
    categoria: "Monitores",
    destacado: true,
  },
  {
    id: 9,
    nombre: "Laptop Dell Inspiron 3520",
    precio: 25637.01,
    stock: 2,
    descripcion: "Laptop de gama media con procesador AMD Ryzen 5.",
    especificaciones: [
      "Procesador: AMD Ryzen 5 5500U",
      "Memoria RAM: 8GB DDR4",
      "Almacenamiento: 512GB SSD",
      "Pantalla: 15.6” Full HD",
      "Sistema operativo: Windows 11",
    ],
    imagen: "/images/products/Laptop-Dell-Inspiron-3520/imagen-1.webp",
    alt: "Laptop Dell Inspiron 3520",
    marca: "Dell",
    categoria: "Laptops",
    destacado: false,
  },
  {
    id: 10,
    nombre: "Laptop Lenovo Ideapad (82XF001TUS)",
    precio: 44864.77,
    stock: 0,
    descripcion: "Laptop de alto rendimiento con procesador Intel Core i7.",
    especificaciones: [
      "Procesador: Intel Core i7",
      "Memoria RAM: 16GB DDR4",
      "Almacenamiento: 512GB SSD",
      "Pantalla: 14” Full HD",
      "Sistema operativo: Windows 11 Pro",
    ],
    imagen: "/images/products/Laptop-Lenovo-Ideapad(82XF001TUS)/imagen-1.webp",
    alt: "Laptop Lenovo Ideapad (82XF001TUS)",
    marca: "Lenovo",
    categoria: "Laptops",
    destacado: true,
  },
  {
    id: 11,
    nombre: "Monitor HP E27 G5",
    precio: 6409.25,
    stock: 1,
    descripcion: "Monitor HP de 27 pulgadas con resolución Full HD.",
    especificaciones: [
      "Tamaño: 27 pulgadas",
      "Resolución: 1920x1080 (Full HD)",
      "Tipo de panel: IPS",
      "Brillo: 300 nits",
      "Conectividad: HDMI 1.4, DisplayPort 1.2, 4 puertos USB-A",
      "Montaje VESA: 100 x 100 mm",
      "Ajustes ergonómicos: Inclinación, giro, pivote y altura ajustable",
      "Tecnologías: Antirreflejo, HP Eye Ease, sin parpadeo",
    ],
    imagen: "/images/products/Monitor-HP-E27-G5/imagen-1.webp",
    alt: "Monitor HP E27 G5",
    marca: "HP",
    categoria: "Monitores",
    destacado: false,
  },
  {
    id: 12,
    nombre: "Laptop HP EP0145",
    precio: 20875.85,
    stock: 2,
    descripcion: "Laptop accesible con procesador AMD Ryzen 3.",
    especificaciones: [
      "Procesador: AMD Ryzen 3",
      "Memoria RAM: 4GB DDR4",
      "Almacenamiento: 128GB SSD",
      "Pantalla: 15.6” HD",
      "Sistema operativo: Windows 10 Home",
    ],
    imagen: "/images/products/Laptop-HP-EP0145/imagen-1.webp",
    alt: "Laptop HP EP0145",
    marca: "HP",
    categoria: "Laptops",
    destacado: true,
  },
  {
    id: 13,
    nombre: "Laptop Lenovo Ideapad 5",
    precio: 25637.01,
    stock: 2,
    descripcion: "Laptop de gama media con procesador AMD Ryzen 5.",
    especificaciones: [
      "Procesador: AMD Ryzen 5",
      "Memoria RAM: 8GB DDR4",
      "Almacenamiento: 256GB SSD",
      "Pantalla: 14” Full HD",
      "Sistema operativo: Windows 11",
    ],
    imagen: "/images/products/Laptop-Lenovo-Ideapad-5/imagen-1.webp",
    alt: "Laptop Lenovo Ideapad 5",
    marca: "Lenovo",
    categoria: "Laptops",
    destacado: false,
  },
];

// Data for the services section
// This data is used to populate the services cards on the homepage and other sections of the website.
import { Award, Headphones, Truck } from "lucide-react";
export const DataFeatures = [
  {
    Icon: Award,
    color: "#3B82F6",
    title: "Calidad Premium",
    description:
      "Seleccionamos y probamos cuidadosamente todos los productos para garantizar que cumplan con nuestros altos estándares de calidad y rendimiento.",
  },
  {
    Icon: Truck,
    color: "#22C55E",
    title: "Entrega Rápida",
    description:
      "Ofrecemos entrega al día siguiente en productos premium y tiempos de envío competitivos en todos los pedidos.",
  },
  {
    Icon: Headphones,
    color: "#6366F1",
    title: "Soporte Experto",
    description:
      "Nuestro equipo de especialistas en tecnología siempre está listo para ayudar con asesoramiento, solución de problemas y recomendaciones.",
  },
];

// Data for the checklist section
// This data is used to populate the checklist items on the homepage and other sections of the website.
export const DataChecklist = [
  {
    title: "Selección Curada",
    description:
      "Cada producto en nuestro catálogo es cuidadosamente seleccionado por su rendimiento y confiabilidad.",
  },
  {
    title: "Precios Competitivos",
    description: "Ofrecemos el mejor valor sin comprometer la calidad.",
  },
  {
    title: "Garantía Extendida",
    description:
      "Tranquilidad con nuestras opciones de garantía extendida en todos los productos.",
  },
];

// Testimonials data for the testimonials section
// This data is used to populate the testimonials cards on the homepage and other sections of the website.
export const DataTestimonials = [
  {
    name: "Esther Howard",
    role: "Software Developer",
    image: "/images/avatars/avatar-1.png",
    text: "Estoy encantada con el servicio de Kovara. El equipo fue muy atento y los productos llegaron justo a tiempo. ¡Súper recomendados! Además, la calidad de los productos superó mis expectativas.",
  },
  {
    name: "Darlene Robertson",
    role: "Diseñadora UX",
    image: "/images/avatars/avatar-3.png",
    text: "Me sorprendió la calidad de atención. Además, su catálogo es muy variado y encontré justo lo que necesitaba. Definitivamente recomendaré Kovara a mis colegas.",
  },
  {
    name: "Albert Flores",
    role: "Administrador de sistemas",
    image: "/images/avatars/avatar-1.png",
    text: "Excelente experiencia de compra. Todo el proceso fue rápido y sin complicaciones. Kovara se ha ganado mi confianza. Estoy seguro de que volveré a comprar pronto.",
  },
  {
    name: "Jane Cooper",
    role: "Ingeniera de datos",
    image: "/images/avatars/avatar-2.png",
    text: "¡Los precios y la calidad de los equipos son increíbles! Sin duda, volveré a comprar pronto. Además, el soporte técnico fue muy útil y resolvió todas mis dudas.",
  },
];

// Navigation links component for navbar
// This data is used to populate the navigation links in the navbar component.
import { House, Users, Boxes, Phone, ShoppingCart } from "lucide-react";
export const Datalinks = [
  {
    href: "/", 
    label: "Inicio",
    Icon: <House className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/about-us",
    label: "Sobre Nosotros",
    Icon: <Users className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/products", 
    label: "Productos",
    Icon: <Boxes className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/cart-products", 
    label: "Carrito",
    Icon: <ShoppingCart className="mr-2" strokeWidth={3} />,
  },
];

// Store information data for the footer
// This data is used to display the store's contact information in the footer.
import { MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
export const storeInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "123 Tech Plaza, Silicon Valley, CA 94043",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: (
      <Link href="https://wa.me/+50558484317" target="_blank" className="underline">
        Contacta por WhatsApp
      </Link>
    ),
  },
  {
    icon: <Mail className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "soporte@kovara.com",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: (
      <>
        Lunes-Viernes: 9AM - 6PM
        <br />
        Sábado: 10AM - 4PM
      </>
    ),
  },
];

// Support links data for the footer
// This data is used to display the support links in the footer.
export const supportLinks = [
  "FAQ",
  "Política de devoluciones",
  "Información de garantía",
  "Soporte de productos",
  "Política de privacidad",
  "Términos y condiciones",
];


// Mock data for job listings
// Mock data for job listings (same as in careers-page-content.jsx)
export const JobData = [
  {
    id: "1",
    title: "Desarrollador Frontend",
    department: "Desarrollo",
    description:
      "Buscamos un desarrollador frontend con experiencia en React y Next.js para unirse a nuestro equipo de desarrollo web. Serás responsable de crear interfaces de usuario atractivas y funcionales para nuestros productos.",
    location: "Ciudad de México",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "15 mayo, 2023",
    applicants: 24,
    requirements: [
      "Experiencia mínima de 3 años en desarrollo frontend",
      "Dominio de React, Next.js, y Tailwind CSS",
      "Conocimientos de TypeScript",
      "Experiencia con sistemas de control de versiones (Git)",
      "Capacidad para trabajar en equipo y comunicarse efectivamente",
    ],
    responsibilities: [
      "Desarrollar interfaces de usuario responsivas y accesibles",
      "Colaborar con diseñadores UX/UI para implementar diseños",
      "Optimizar aplicaciones para máxima velocidad y escalabilidad",
      "Participar en revisiones de código y mentorías",
      "Mantenerse actualizado con las últimas tendencias y mejores prácticas",
    ],
  },
  {
    id: "2",
    title: "Especialista en Soporte Técnico",
    department: "Soporte",
    description:
      "Estamos buscando un especialista en soporte técnico para ayudar a nuestros clientes con problemas de hardware y software. Deberás proporcionar asistencia técnica de alta calidad y resolver problemas complejos.",
    location: "Guadalajara",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "20 mayo, 2023",
    applicants: 18,
    requirements: [
      "Experiencia mínima de 2 años en soporte técnico",
      "Conocimientos avanzados en hardware de computadoras",
      "Familiaridad con sistemas operativos Windows y Linux",
      "Excelentes habilidades de comunicación y servicio al cliente",
      "Capacidad para trabajar bajo presión y resolver problemas rápidamente",
    ],
    responsibilities: [
      "Proporcionar soporte técnico a clientes por teléfono, email y chat",
      "Diagnosticar y resolver problemas de hardware y software",
      "Documentar soluciones y mantener una base de conocimientos",
      "Seguir procedimientos de escalamiento cuando sea necesario",
      "Mantener altos niveles de satisfacción del cliente",
    ],
  },
  {
    id: "3",
    title: "Diseñador UX/UI",
    department: "Diseño",
    description:
      "Buscamos un diseñador UX/UI creativo y orientado a detalles para diseñar experiencias de usuario excepcionales para nuestros productos digitales. Trabajarás en estrecha colaboración con equipos de producto y desarrollo.",
    location: "Remoto",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "10 mayo, 2023",
    applicants: 32,
    requirements: [
      "Experiencia mínima de 3 años en diseño UX/UI",
      "Portafolio que demuestre habilidades en diseño de interfaces",
      "Dominio de herramientas como Figma, Adobe XD o Sketch",
      "Conocimientos de principios de usabilidad y accesibilidad",
      "Capacidad para crear wireframes, prototipos y mockups",
    ],
    responsibilities: [
      "Diseñar interfaces intuitivas y atractivas para aplicaciones web y móviles",
      "Realizar investigación de usuarios y pruebas de usabilidad",
      "Crear y mantener sistemas de diseño y bibliotecas de componentes",
      "Colaborar con desarrolladores para implementar diseños",
      "Iterar diseños basados en feedback de usuarios y stakeholders",
    ],
  },
  {
    id: "4",
    title: "Gerente de Marketing Digital",
    department: "Marketing",
    description:
      "Estamos buscando un Gerente de Marketing Digital experimentado para liderar nuestras estrategias de marketing online. Serás responsable de aumentar la visibilidad de la marca y generar leads de calidad.",
    location: "Monterrey",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "5 mayo, 2023",
    applicants: 15,
    requirements: [
      "Experiencia mínima de 5 años en marketing digital",
      "Conocimientos avanzados en SEO, SEM, email marketing y redes sociales",
      "Experiencia en análisis de datos y herramientas como Google Analytics",
      "Capacidad para desarrollar y ejecutar campañas de marketing integradas",
      "Habilidades de liderazgo y gestión de equipos",
    ],
    responsibilities: [
      "Desarrollar e implementar estrategias de marketing digital",
      "Gestionar campañas de publicidad online y optimizar el ROI",
      "Analizar métricas de marketing y preparar informes de rendimiento",
      "Supervisar el contenido del sitio web y las redes sociales",
      "Colaborar con equipos de ventas para alinear estrategias",
    ],
  },
  {
    id: "5",
    title: "Ingeniero DevOps",
    department: "Operaciones",
    description:
      "Buscamos un Ingeniero DevOps para optimizar nuestros procesos de desarrollo y despliegue. Serás responsable de mantener nuestra infraestructura y automatizar procesos para mejorar la eficiencia.",
    location: "Remoto",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "25 mayo, 2023",
    applicants: 10,
    requirements: [
      "Experiencia mínima de 4 años en roles DevOps",
      "Conocimientos avanzados en AWS, Docker y Kubernetes",
      "Experiencia con herramientas de CI/CD como Jenkins o GitHub Actions",
      "Familiaridad con lenguajes de scripting como Python o Bash",
      "Conocimientos de seguridad informática y mejores prácticas",
    ],
    responsibilities: [
      "Diseñar y mantener infraestructura en la nube",
      "Implementar y gestionar pipelines de CI/CD",
      "Automatizar procesos de desarrollo y despliegue",
      "Monitorear sistemas y resolver problemas de infraestructura",
      "Colaborar con equipos de desarrollo para mejorar procesos",
    ],
  },
  {
    id: "6",
    title: "Representante de Ventas",
    department: "Ventas",
    description:
      "Estamos buscando un Representante de Ventas entusiasta para promover nuestros productos y servicios. Serás responsable de generar nuevos negocios y mantener relaciones con clientes existentes.",
    location: "Ciudad de México",
    type: "Tiempo Completo",
    hours: "40h/semana",
    posted: "18 mayo, 2023",
    applicants: 20,
    requirements: [
      "Experiencia mínima de 2 años en ventas B2B",
      "Excelentes habilidades de comunicación y negociación",
      "Capacidad para entender necesidades técnicas de clientes",
      "Orientación a resultados y cumplimiento de metas",
      "Disponibilidad para viajar ocasionalmente",
    ],
    responsibilities: [
      "Identificar y contactar potenciales clientes",
      "Realizar demostraciones de productos y presentaciones de ventas",
      "Negociar contratos y cerrar ventas",
      "Mantener relaciones con clientes existentes",
      "Alcanzar y superar metas de ventas mensuales y trimestrales",
    ],
  },
]
