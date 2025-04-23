"use client";
import React from "react";

import {
  Eye, Zap
} from "lucide-react";

import {
  Card, CardContent
} from "@/components/ui/card";

const MisionVision = () => {
    return (

        <Section title="Nuestra Misión y Visión">
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

export default MisionVision;