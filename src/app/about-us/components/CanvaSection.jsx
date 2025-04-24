"use client";


import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const canvasData = [
  {
    label: "SOCIOS CLAVES",
    content: [
      "Proveedores de productos informáticos: Marcas reconocidas como Dell, HP y Lenovo, que proporcionan productos con garantía directa.",
      "Vendedores capacitados: Personal especializado en asesorar a clientes con distintas necesidades.",
      "Plataformas de marketing digital: Redes sociales y sitio web, que funcionan como canales de promoción y venta.",
      "Servicios de soporte técnico: Técnicos especializados que proporcionan asistencia, reparación y mantenimiento de los productos vendidos.",
    ],
  },
  {
    label: "ACTIVIDADES CLAVES",
    content: [
      "Venta de productos informáticos: Comercialización de laptops, periféricos y componentes, adaptados a diferentes necesidades (gaming, oficina, diseño, etc.).",
      "Asesoramiento personalizado: Ofrecer soporte técnico y orientación a los clientes para seleccionar productos que se ajusten a sus necesidades y presupuesto.",
      "Marketing y promoción: Difusión de productos y servicios a través de redes sociales, sitio web y comunicación directa (WhatsApp, Messenger, correo electrónico, llamadas telefónicas).",
      "Gestión de garantías y soporte postventa: Brindar asistencia técnica, mantenimiento y cumplimiento de garantías proporcionadas por los fabricantes.",
    ],
  },
  {
    label: "RECURSOS CLAVES",
    content: [
      "Alianzas comerciales con marcas reconocidas como Dell, HP, Lenovo y Apple, que garantizan productos de calidad y soporte oficial.",
      "Vendedores capacitados que ofrecen un servicio personalizado a distintos tipos de usuarios (gaming, trabajo, diseño, etc.).",
      "Variedad de productos en diferentes rangos de precios y especificaciones, asegurando opciones accesibles para todo tipo de cliente.",
    ],
  },
  {
    label: "PROPUESTA DE VALOR",
    content: [
      "Programa de atención preferencial: sistema de fidelización que ofrece beneficios exclusivos a clientes frecuentes, como descuentos, promociones anticipadas y atención personalizada.",
      "Precios competitivos con garantía incluida: ofrecemos computadoras, accesorios y componentes informáticos a precios accesibles para todo tipo de cliente, sin comprometer la calidad.",
      "Cada producto incluye garantía, lo que brinda seguridad y respaldo en cada compra.",
      "Asesoría especializada: brindamos orientación personalizada antes, durante y después de la compra.",
      "Nuestro equipo ayuda al cliente a elegir la mejor opción según su necesidad (estudiantes, empresas o usuarios exigentes), optimizando su inversión tecnológica.",
      "Soporte técnico postventa: servicio de asistencia técnica disponible para mantenimiento, reparaciones o asesorías posteriores a la compra, fortaleciendo la confianza y satisfacción del cliente.",
    ],
  },
  {
    label: "RELACIÓN CON CLIENTES",
    content: [
      "Comunicación directa a través de WhatsApp, Messenger, correo electrónico o llamadas telefónicas.",
      "Vendedores capacitados que brindan asesoramiento personalizado según las necesidades y preferencias de cada cliente.",
      "Promoción del catálogo de productos y servicios mediante redes sociales y sitio web.",
      "Garantías ofrecidas por el fabricante en todos los productos, asegurando confianza y calidad en cada compra.",
    ],
  },
  {
    label: "SEGMENTO DE CLIENTES",
    content: [
      "Estudiantes: usuarios que requieren equipos confiables y accesibles para tareas académicas, trabajos escolares, clases virtuales y herramientas educativas.",
      "Profesionales: personas que necesitan laptops de alto rendimiento para actividades laborales, diseño, programación, oficina y uso empresarial.",
      "Gamers: clientes que buscan computadoras con características avanzadas para juegos, como tarjetas gráficas potentes, buena velocidad y alto rendimiento.",
      "Usuarios generales: personas que desean un equipo para uso cotidiano como navegación, entretenimiento, videollamadas y gestión personal.",
    ],
  },
  {
    label: "CANALES",
    content: [
      "Tienda física, tienda online, redes sociales, correo electrónico.",
    ],
  },
  {
    label: "ESTRUCTURA DE COSTOS",
    content: [
      "Costos de adquisición de productos: Compra de laptops, periféricos y componentes a marcas reconocidas.",
      "Marketing y publicidad: Inversión en campañas publicitarias en redes sociales, mantenimiento del sitio web y promoción de productos.",
      "Salarios y comisiones: Pago al personal de ventas y técnicos especializados que brindan asesoramiento y soporte técnico.",
      "Costos operativos del establecimiento físico: Alquiler, servicios básicos (electricidad, internet) y mantenimiento del local.",
      "Soporte técnico postventa: Gastos asociados a reparaciones, mantenimiento y cumplimiento de garantías.",
      "Infraestructura tecnológica: Inversión en el desarrollo y mantenimiento de la página web, así como herramientas de comunicación y gestión de clientes.",
    ],
  },
  {
    label: "FUENTES DE INGRESOS",
    content: [
      "La principal fuente de ingresos proviene de la venta de laptops nuevas, disponibles en diversas gamas que se ajustan a las necesidades y presupuestos de cada cliente. Este servicio incluye soporte técnico y asesoramiento posterior a la venta.",
      "Adicionalmente, se genera ingreso a través de la comercialización de periféricos y componentes informáticos como audífonos, cargadores, monitores y otros accesorios.",
    ],
  },
];

export default function Canva() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6 bg-[#0f172a] rounded-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Modelo de Negocio: <span className="text-sky-400">KOVARA</span>
      </h2>

      <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-6">
        {canvasData.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/1 lg:basis-1/3 pr-6 flex-shrink-0 pl-10"
          >
            <Card className="min-h-[28rem] bg-slate-900 text-white shadow-xl rounded-2xl border border-slate-700 flex items-center justify-center">
              <CardContent className="p-6 flex flex-col items-center justify-start h-full overflow-y-auto max-h-[20rem] scrollbar-custom">
                <h3 className="text-lg font-semibold text-sky-400 uppercase mb-4 text-center">
                  {item.label}
                </h3>
                <ul className="list-disc list-inside text-sm space-y-2 text-slate-300 text-center">
                  {item.content.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </section>
  );
}
