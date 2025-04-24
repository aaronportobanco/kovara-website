"use client";
import React from "react";

import {
  Card, CardContent
} from "@/components/ui/card";
import {
   Star, Brain, HeartHandshake, Timer, User2
} from "lucide-react";

const Valores = () => {

  return (

    <Section title="Nuestros Valores">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">

          <CardItem title={"Calidad"} icon={<Star />}>
            Ofrecemos productos de marcas reconocidas y con garantía.
          </CardItem>

          <CardItem title={"Innovación"} icon={<Brain />}>
            Nos mantenemos actualizados con las últimas tendencias tecnológicas.
          </CardItem>
          
          <CardItem title={"Compromiso"} icon={<HeartHandshake />}>
            Brindamos un servicio confiable y orientado a la satisfacción del cliente.
          </CardItem>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          <CardItem title={"Responsabilidad"} icon={<Timer />}>
            Garantizamos transparencia en cada venta y servicio.
          </CardItem>
          
          <CardItem title={"Atencion al cliente"} icon={<User2 />}>
            Escuchamos y ofrecemos soluciones adecuadas a las necesidades de cada usuario.
          </CardItem>
      </div>
    </Section>
    
  )

}

const CardItem = ({ icon, title, children }) => (
  <Card className="bg-slate-600 border border-slate-600">
    <CardContent className="p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="bg-slate-700 p-2 rounded-full">{icon}</div>
        <h3 className="text-lg text-slate-200 font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-slate-100">{children}</p>
    </CardContent>
  </Card>
);

const Section = ({ title, children }) => (
  <section className="flex flex-col gap-6 w-full">
    <h2 className="text-white text-2xl font-bold border-b border-slate-400 pb-2">
      {title}
    </h2>
    {children}
  </section>
);

export default Valores;