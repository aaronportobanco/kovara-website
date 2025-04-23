"use client";
import React from "react";

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";

import {
  Button
} from "@/components/ui/button";

const ReglamentosNormativas = () => {

    const [activeGroup, setActiveGroup] = React.useState('Reglamentos'); 

    return (
        <Section title="Reglamentos y normativas">
        <div className="flex gap-4">
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
      {activeGroup === 'Reglamentos' && (
        <>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Condiciones de Compra</AccordionTrigger>
            <AccordionContent>
              Para la adquisición de productos,
              |incluyendo el pago total antes de la entrega, condiciones para apartados
                y posibles modificaciones de precios según el mercado tecnológico. Se tipifica
               como falta leve el desconocimiento reiterado de estas condiciones, como falta 
               grave la negativa a completar el pago acordado, y como falta muy
             grave el intento de obtener productos sin cumplir con los requisitos establecidos.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Garantía y Devoluciones</AccordionTrigger>
            <AccordionContent>
            Se considera falta leve no conservar la factura,
             falta grave la exigencia de devolución 
              sin motivo válido, y falta muy grave el
             intento de presentar reclamaciones fraudulentas o manipular
              productos para obtener beneficio. 
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Envíos y Entregas</AccordionTrigger>
            <AccordionContent>
            para la entrega de productos, tiempos estimados y responsabilidades 
            del cliente respecto a costos adicionales. Se clasifica como falta leve no
             presentarse en el lugar acordado, como grave la negativa a asumir costos
              previamente informados,
             y como muy grave la alteración deliberada de datos de entrega con fines engañosos.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Servicio Técnico y Soporte</AccordionTrigger>
            <AccordionContent>
            por reparaciones fuera de garantía y el proceso de notificación previa al cliente.
             Se considera falta leve insistir en soporte sin prueba de compra, falta grave
              rechazar los costos previamente informados,
             y falta muy grave manipular equipos y luego exigir garantía injustificadamente. 
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Atención al Cliente y Comportamiento</AccordionTrigger>
            <AccordionContent>
            se establecen normas de respeto, cordialidad y conducta adecuada dentro del establecimiento.
             Se reconocen comportamientos ejemplares como mérito
             s (por ejemplo, trato respetuoso o colaboración con el personal), 
             mientras que se clasifican como falta leve el uso de lenguaje inapropiado,
              como grave los actos de agresión verbal,
             y como muy grave las agresiones físicas o el ingreso bajo efectos de sustancias 
            </AccordionContent>
          </AccordionItem>
          </Accordion>
          </>
      )}
    
      {activeGroup === 'Normativas' && (
        <>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Calidad</AccordionTrigger>
            <AccordionContent>
                   •	Todos los productos ofrecidos son de marcas reconocidas y cuentan con garantía oficial proporcionada por el fabricante.
            <br /> •	Se realiza un control de calidad exhaustivo en cada equipo antes de ser entregado al cliente.
            <br /> •	En caso de ofrecer productos reacondicionados, se especificará claramente su estado y las características particulares.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
    
            <AccordionTrigger>Pagos y Facturación</AccordionTrigger>
            <AccordionContent>
                  •	Se aceptan pagos mediante efectivo, transferencias bancarias y tarjetas de crédito/débito.
          <br />  •	Toda compra incluye una factura o comprobante de pago correspondiente.
          <br />  •	Los precios están sujetos a la moneda local y pueden incluir impuestos según la legislación vigente.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Protección de Datos</AccordionTrigger>
    
            <AccordionContent>
                  •	Toda la información proporcionada por el cliente será tratada de manera confidencial.
          <br />  •	No se compartirán datos personales con terceros sin el consentimiento expreso del cliente.
          <br />  •	Se seguirá estrictamente la normativa legal vigente en materia de protección de datos personales.
            </AccordionContent>
    
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Responsabilidad y Ética Empresarial</AccordionTrigger>
    
            <AccordionContent>
            •	La empresa garantiza la transparencia total en sus operaciones comerciales.
          <br />  •	No se comercializarán productos falsificados o sin una garantía legítima.
          <br />  •	Se evitarán prácticas engañosas en la publicidad y promoción de productos.
            </AccordionContent>
    
          </AccordionItem>
          </Accordion>
    
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Ambiental y de Reciclaje</AccordionTrigger>
    
            <AccordionContent>
            •	Se fomentará la venta de productos ecológicos y con certificaciones ambientales cuando sea posible.
          <br />  •	Se incentivará la entrega de dispositivos electrónicos en desuso para programas de reciclaje.
          <br />  •	Se minimizará el uso de empaques contaminantes, eligiendo alternativas sostenibles.
            </AccordionContent>
    
          </AccordionItem>
          </Accordion>
          </>
        )}
        </Section>
    )
}

const Section = ({ title, children }) => (
    <section className="flex flex-col gap-6 w-full">
      <h2 className="text-white text-2xl font-bold border-b border-slate-400 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
  
export default ReglamentosNormativas