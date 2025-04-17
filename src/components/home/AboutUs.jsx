"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center gap-12 relative px-4 py-8 md:px-8 lg:px-16 w-full">
      <Header
        title={"¿Quiénes Somos?"}
        subtitle={"Conoce más acerca de nuestra filosofía institucional"}
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl">
        <article className="flex flex-col justify-center gap-6 max-w-xl text-center lg:text-left">
          {/* VISION */}
          <div>
            <h3 className="text-foreground text-2xl font-bold leading-snug tracking-tight">
              Nuestra Visión
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mt-2">
              Ser la tienda líder en soluciones tecnológicas, ofreciendo equipos
              de cómputo y accesorios de alta calidad, con un servicio al
              cliente excepcional y precios competitivos, impulsando la
              innovación y accesibilidad tecnológica en nuestra comunidad.
            </p>
          </div>

          {/* MISIÓN */}
          <div>
            <h3 className="text-foreground text-2xl font-bold leading-snug tracking-tight">
              Nuestra Misión
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mt-2">
              Somos una tienda que brinda a nuestros clientes productos
              informáticos de última generación, garantizando asesoramiento
              personalizado, precios accesibles y un servicio confiable, con el
              compromiso de mejorar la experiencia tecnológica de cada usuario.
            </p>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-8">
            <Button aria-label="Conocer más sobre Kovara">
              Conocer más
              <ArrowRight strokeWidth={3} />
            </Button>
          </div>
        </article>

        {/* IMAGE */}
        <figure
          className="w-full max-w-md h-72 bg-gray-300 rounded-md"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default AboutUs;
