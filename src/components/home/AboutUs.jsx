"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {MoveRight} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center gap-12 relative px-4 py-8 md:px-8 lg:px-16 w-full">
      <header className="flex flex-col items-center justify-center gap-4 w-full text-center">
        <h2 className="text-slate-50 text-3xl font-bold leading-tight tracking-tight">
          Sobre Kovara
        </h2>
        <p className="text-slate-400 text-base font-medium leading-relaxed">
          Conoce más sobre nuestra filosofía Institucional
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl">
        <article className="flex flex-col justify-center gap-6 max-w-xl text-center lg:text-left">
          <div>
            <h3 className="text-slate-50 text-2xl font-bold leading-snug tracking-tight">
              Nuestra Visión
            </h3>
            <p className="text-slate-400 text-base leading-relaxed mt-2">
              Ser la tienda líder en soluciones tecnológicas, ofreciendo equipos
              de cómputo y accesorios de alta calidad, con un servicio al
              cliente excepcional y precios competitivos, impulsando la
              innovación y accesibilidad tecnológica en nuestra comunidad.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 text-2xl font-bold leading-snug tracking-tight">
              Nuestra Misión
            </h3>
            <p className="text-slate-400 text-base leading-relaxed mt-2">
              Somos una tienda que brinda a nuestros clientes productos
              informáticos de última generación, garantizando asesoramiento
              personalizado, precios accesibles y un servicio confiable, con el
              compromiso de mejorar la experiencia tecnológica de cada usuario.
            </p>
          </div>

          <div className="pt-8">
            <Button aria-label="Conocer más sobre Kovara">
              <MoveRight className="h-4 w-4" strokeWidth={3}/>
              Conocer más
            </Button>
          </div>
        </article>

        <figure
          className="w-full max-w-md h-72 bg-gray-300 rounded-md"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default AboutUs;