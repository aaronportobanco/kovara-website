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
    stock: 2,
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
    stock: 5,
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
    stock: 1,
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
import { House, Users, Boxes, Phone } from "lucide-react";
export const Datalinks = [
  {
    href: "#home",
    label: "Inicio",
    Icon: <House className="mr-2" strokeWidth={3} />,
  },
  {
    href: "#about",
    label: "Sobre Nosotros",
    Icon: <Users className="mr-2" strokeWidth={3} />,
  },
  {
    href: "#featured-products",
    label: "Productos",
    Icon: <Boxes className="mr-2" strokeWidth={3} />,
  },
  {
    href: "#contact",
    label: "Contacto",
    Icon: <Phone className="mr-2" strokeWidth={3} />,
  },
];

export const DataAbout = [{}];
