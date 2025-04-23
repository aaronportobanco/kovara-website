"use client";

import React from "react";

// Datos del Canvas con sus respectivos gridClass
const canvasData = [
  {
    id: 1,
    label: "SOCIOS CLAVES",
    content: [
      "Proveedores de productos informáticos: Marcas reconocidas como Dell, HP y Lenovo, que proporcionan productos con garantía directa.",
      "Vendedores capacitados: Personal especializado en asesorar a clientes con distintas necesidades.",
      "Plataformas de marketing digital: Redes sociales y sitio web, que funcionan como canales de promoción y venta.",
      "Servicios de soporte técnico: Técnicos especializados que proporcionan asistencia, reparación y mantenimiento de los productos vendidos.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 2,
    label: "ACTIVIDADES CLAVES",
    content: [
      "Venta de productos informáticos: Comercialización de laptops, periféricos y componentes, adaptados a diferentes necesidades (gaming, oficina, diseño, etc.).",
      "Asesoramiento personalizado: Soporte técnico y orientación a los clientes para seleccionar productos que se ajusten a sus necesidades y presupuesto.",
      "Marketing y promoción: Difusión de productos y servicios a través de redes sociales, sitio web y comunicación directa.",
      "Gestión de garantías y soporte postventa: Asistencia técnica, mantenimiento y cumplimiento de garantías proporcionadas por los fabricantes.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 3,
    label: "PROPUESTA DE VALOR",
    content: [
      "Ofrecer computadoras, accesorios y componentes informáticos a precios competitivos, garantizando calidad, fiabilidad y accesibilidad para todo tipo de cliente.",
      "Cada compra incluye garantía y soporte técnico, asegurando asistencia en casos de reparación, mantenimiento o asesoría.",
    ],
    gridClass: "col-span-1 row-span-3",
  },
  {
    id: 4,
    label: "ATENCIÓN CON EL CLIENTE",
    content: [
      "Comunicación directa a través de WhatsApp, Messenger, correo electrónico o llamadas telefónicas.",
      "Vendedores capacitados que brindan asesoramiento personalizado según las necesidades y preferencias de cada cliente.",
      "Promoción del catálogo de productos y servicios mediante redes sociales y sitio web.",
      "Garantías ofrecidas por el fabricante, asegurando confianza y calidad.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 5,
    label: "SEGMENTO DE CLIENTES",
    content: [
      "El público objetivo incluye a usuarios que buscan equipos de alta calidad que satisfagan sus necesidades educativas, profesionales y recreativas. Esto incluye estudiantes, profesionales, gamers y usuarios generales.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 6,
    label: "RECURSOS CLAVES",
    content: [
      "Alianzas con marcas como Dell, HP, Lenovo y Apple.",
      "Vendedores capacitados que ofrecen un servicio personalizado.",
      "Variedad de productos en diferentes rangos de precios y especificaciones.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 7,
    label: "CANALES",
    content: [
      "Establecimiento físico: Venta directa al cliente.",
      "Página web: Plataforma digital para promoción y venta.",
      "Redes sociales (Facebook, Instagram): Canales de comunicación, promoción y ventas.",
    ],
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 8,
    label: "ESTRUCTURAS DE COSTOS",
    content: [
      "Costos de adquisición de productos: laptops, periféricos y componentes.",
      "Marketing y publicidad: redes sociales y sitio web.",
      "Salarios y comisiones: personal de ventas y soporte técnico.",
      "Costos operativos del local: alquiler, servicios básicos.",
      "Soporte técnico postventa: mantenimiento y cumplimiento de garantías.",
      "Infraestructura tecnológica: sitio web y herramientas de gestión.",
    ],
    gridClass: "col-span-3 row-span-1",
  },
  {
    id: 9,
    label: "FLUJO DE INGRESO",
    content: [
      "Venta de laptops nuevas con soporte técnico y asesoría.",
      "Ingreso adicional por venta de periféricos como audífonos, cargadores, monitores y accesorios.",
    ],
    gridClass: "col-span-3 row-span-1",
  },
];

const Canva = () => {
  return (
    <Section title="MODELO DE NEGOCIO: KOVARA">
      <div className="grid grid-cols-3  gap-4 w-full max-w-6xl mx-auto">
        {canvasData.map(({ id, label, content, gridClass }) => (
          <div
            key={id}
            className={`bg-slate-800 text-white border border-slate-600 p-5 rounded shadow-md ${gridClass}`}
          >
            <h3 className="text-base uppercase font-bold border-b border-slate-500 pb-1 mb-3 text-sky-300">
              {label}
            </h3>
            <div className="text-sm text-slate-300 space-y-2">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Section = ({ title, children }) => (
  <section className="flex flex-col gap-6 w-full px-4">
    <h2 className="text-2xl font-extrabold text-center text-white border-b-2 border-sky-500 pb-3">
      {title}
    </h2>
    {children}
  </section>
);

export default Canva;
