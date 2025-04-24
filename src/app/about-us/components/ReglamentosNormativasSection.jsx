"use client";
import React from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ReglamentosNormativas = () => {
  const [activeGroup, setActiveGroup] = React.useState('Reglamentos');

  const reglamentos = [
    {
      title: "Condiciones de Compra",
      content:
        "Para la adquisición de productos, incluyendo el pago total antes de la entrega, condiciones para apartados y posibles modificaciones de precios según el mercado tecnológico. Se tipifica como falta leve el desconocimiento reiterado de estas condiciones, como falta grave la negativa a completar el pago acordado, y como falta muy grave el intento de obtener productos sin cumplir con los requisitos establecidos.",
    },
    {
      title: "Garantía y Devoluciones",
      content:
        "Se considera falta leve no conservar la factura, falta grave la exigencia de devolución sin motivo válido, y falta muy grave el intento de presentar reclamaciones fraudulentas o manipular productos para obtener beneficio.",
    },
    {
      title: "Envíos y Entregas",
      content:
        "Para la entrega de productos, tiempos estimados y responsabilidades del cliente respecto a costos adicionales. Se clasifica como falta leve no presentarse en el lugar acordado, como grave la negativa a asumir costos previamente informados, y como muy grave la alteración deliberada de datos de entrega con fines engañosos.",
    },
    {
      title: "Servicio Técnico y Soporte",
      content:
        "Por reparaciones fuera de garantía y el proceso de notificación previa al cliente. Se considera falta leve insistir en soporte sin prueba de compra, falta grave rechazar los costos previamente informados, y falta muy grave manipular equipos y luego exigir garantía injustificadamente.",
    },
    {
      title: "Atención al Cliente y Comportamiento",
      content:
        "Se establecen normas de respeto, cordialidad y conducta adecuada dentro del establecimiento. Se reconocen comportamientos ejemplares como méritos. Se clasifican como falta leve el uso de lenguaje inapropiado, como grave los actos de agresión verbal, y como muy grave las agresiones físicas o el ingreso bajo efectos de sustancias.",
    },
  ];

  const normativas = [
    {
      title: "Calidad",
      content:
        "• Todos los productos ofrecidos son de marcas reconocidas y cuentan con garantía oficial proporcionada por el fabricante. \n• Se realiza un control de calidad exhaustivo en cada equipo antes de ser entregado al cliente. \n• En caso de ofrecer productos reacondicionados, se especificará claramente su estado y características.",
    },
    {
      title: "Pagos y Facturación",
      content:
        "• Se aceptan pagos mediante efectivo, transferencias bancarias y tarjetas de crédito/débito. \n• Toda compra incluye una factura o comprobante de pago correspondiente. \n• Los precios están sujetos a la moneda local y pueden incluir impuestos según la legislación vigente.",
    },
    {
      title: "Protección de Datos",
      content:
        "• Toda la información proporcionada por el cliente será tratada de manera confidencial. \n• No se compartirán datos personales con terceros sin consentimiento. \n• Se seguirá la normativa legal vigente en materia de protección de datos personales.",
    },
    {
      title: "Responsabilidad y Ética Empresarial",
      content:
        "• La empresa garantiza transparencia total en sus operaciones comerciales. \n• No se comercializarán productos falsificados. \n• Se evitarán prácticas engañosas en la publicidad.",
    },
    {
      title: "Ambiental y de Reciclaje",
      content:
        "• Se fomentará la venta de productos ecológicos. \n• Se incentivará la entrega de dispositivos en desuso. \n• Se minimizará el uso de empaques contaminantes.",
    },
  ];

  const contentToRender = activeGroup === "Reglamentos" ? reglamentos : normativas;

  return (
    <Section title="Reglamentos y Normativas">
      <div className="flex gap-4 mb-6">
        <Button
          variant={activeGroup === 'Reglamentos' ? 'default' : 'outline'}
          onClick={() => setActiveGroup('Reglamentos')}
        >
          Reglamentos
        </Button>
        <Button
          variant={activeGroup === 'Normativas' ? 'default' : 'outline'}
          onClick={() => setActiveGroup('Normativas')}
        >
          Normativas
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl space-y-3">
        {contentToRender.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold text-slate-100 hover:text-sky-200 transition">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-slate-100 whitespace-pre-line">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

const Section = ({ title, children }) => (
  <section className="flex flex-col items-center w-full bg-slate-700 p-6 rounded-2xl shadow-md">
    <h2 className="text-3xl font-bold text-white border-b border-slate-300 pb-3 mb-4 w-full text-center">
      {title}
    </h2>
    {children}
  </section>
);

export default ReglamentosNormativas;
