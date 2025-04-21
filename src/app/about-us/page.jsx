"use client";

import React from "react";

import {
  Button
} from "@/components/ui/button";

import {
  Card, CardContent
} from "@/components/ui/card";

import {
  ChevronDown, ChevronRight, ChevronLeft, Eye, Zap, Laptop, ArrowRight
} from "lucide-react";

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";

import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import CardVertical from "@/app/products/components/CardVertical";

import BreadcrumbComp from "@/components/layout/BreadcrumbComp";

const AboutUsPage = () => {

  const [activeGroup, setActiveGroup] = React.useState('Reglamentos'); // Esta constante depende de 
  // la seccion de Normativas y reglamentos mucho ojo !!

  return (
    <main className="flex flex-col items-center gap-6 px-8 py-5 bg-slate-900">
      <BreadcrumbComp page={"Sobre nosotros"}/>

      {/* Encabezado */}
      <section className="flex justify-between items-center w-full py-6">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-white text-3xl font-bold">Sobre Nosotros</h1>
          <p className="text-slate-400 text-base font-medium">
            Conoce más sobre Kovara y nuestra misión como empresa
          </p>
        </div>
        <div className="flex gap-5 flex-1 justify-end">
          <Button>
            <ArrowRight className="h-4 w-4 mr-2" />
            Ver Productos
          </Button>
          <Button variant="outline">
            Contáctanos
          </Button>
        </div>
      </section>

      {/* Contenido */}

      <section className="flex flex-col gap-20 w-full">

        {/* Seccion Mision / Valor */}

      <Section title="Misión y Visión">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardItem icon={<Zap />} title="Misión">
             Somos una tienda que brinda a nuestros clientes productos informáticos de última generación,
             garantizando asesoramiento personalizado, precios accesibles y un servicio confiable, 
             con el compromiso de mejorar la experiencia tecnológica de cada usuario.
            </CardItem>
            <CardItem icon={<Eye />} title="Visión">
             Ser la tienda líder en soluciones tecnológicas, ofreciendo equipos de cómputo y
             accesorios de alta calidad, con un servicio al cliente excepcional y precios competitivos,
             impulsando la innovación y accesibilidad tecnológica en nuestra comunidad.
            </CardItem>
          </div>
      </Section>

      <Section title="Nuestros Valores">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">

              <CardItem title={"Calidad"} icon={<Laptop />}>
                Ofrecemos productos de marcas reconocidas y con garantía.
              </CardItem>

              <CardItem title={"Innovación"} icon={<Laptop />}>
                Nos mantenemos actualizados con las últimas tendencias tecnológicas.
              </CardItem>
              
              <CardItem title={"Compromiso"} icon={<Laptop />}>
                Brindamos un servicio confiable y orientado a la satisfacción del cliente.
              </CardItem>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          <CardItem title={"Responsabilidad"} icon={<Laptop />}>
                Garantizamos transparencia en cada venta y servicio.
              </CardItem>
              
              <CardItem title={"Atencion al cliente"} icon={<Laptop />}>
                Escuchamos y ofrecemos soluciones adecuadas a las necesidades de cada usuario.
              </CardItem>
          </div>
      </Section>

        {/* Politicas internas */}

      <Section title="Políticas Internas">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
              <CardItem icon={<Zap />} title={"Metodos de pago"}>
                Se aceptan pagos en efectivo, transferencias bancarias y tarjetas de crédito/débito.
              </CardItem>

              <CardItem icon={<Zap />} title={"Garantias y devoluciones"}>
                Los productos cuentan con garantía según el fabricante.
                Devoluciones aplican en casos de defectos de fábrica.
              </CardItem>

              <CardItem icon={<Zap />} title={"Privacidad"}>
                La información del cliente será tratada con total confidencialidad.
              </CardItem>
        
          </div>
      </Section>

        {/* Reglamentos y normativas */}

      <Section title="Reglamentos y Normativas">

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


      <Section title="Modelo Canvas de Negocio">
        <div className="flex items-center gap-4 overflow-x-auto">
          <Carousel
            className="w-full max-w-6xl"
            opts={{
              align: "start",
            }}
            ref={(el) => {
              if (!el) return;

              // autoplay cada 3 segundos
              let interval = setInterval(() => {
                const nextButton = el.querySelector('[data-carousel-next]');
                nextButton?.click();
              }, 3000);

              // limpiar al desmontar
              return () => clearInterval(interval);
            }}
          >
            <CarouselContent>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CarouselItem key={i} className="basis-1/3">
                  <CardItem
                    icon={<Laptop />}
                    title={`Producto ${i}`}
                  >
                    Descripción del producto destacado número {i}.
                  </CardItem>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>
      </section>
    </main>
  );
};

// Subcomponentes

const Section = ({ title, children }) => (
  <section className="flex flex-col gap-6 w-full">
    <h2 className="text-white text-2xl font-bold border-b border-slate-400 pb-2">
      {title}
    </h2>
    {children}
  </section>
);

const CardItem = ({ icon, title, children }) => (
  <Card className="bg-slate-800 text-white border border-slate-600">
    <CardContent className="p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="bg-slate-600 p-2 rounded-full">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-300">{children}</p>
    </CardContent>
  </Card>
);

export default AboutUsPage;
