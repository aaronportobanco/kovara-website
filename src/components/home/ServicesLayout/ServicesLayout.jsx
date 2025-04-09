import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Keyboard, Laptop, Mouse } from "lucide-react";
import ServicesCards from "@/components/layout/servicesCards/ServicesCards";
import Header from "@/components/layout/header/Header";
import React from "react";

const serviceData = [
  {
    icon: Laptop,
    title: "Computadoras",
    description: "Equipos de alto rendimiento para profesionales y gamers",
  },
  {
    icon: Mouse,
    title: "Accesorios",
    description: "Periféricos y complementos de calidad premium",
  },
  {
    icon: Keyboard,
    title: "Componentes",
    description: "Piezas de última generación para actualizar tu equipo",
  },
  {
    icon: Headphones,
    title: "Soporte",
    description: "Asesoramiento técnico y servicio post-venta",
  },
];

export default function ServicesLayout() {
  return (
    <section className="flex flex-col items-center justify-center gap-[50px] py-10">
      <Header
        title={"Nuestros Servicios"}
        subtitle={"Conoce todo lo que ofrecemos para ti"}
      />
      <div className="flex items-center justify-center gap-10 w-full flex-wrap">
        {serviceData.map((service, index) => (
          <ServicesCards
            key={index}
            icon={<service.icon className="w-5 h-5 text-foreground" />}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
