"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "../../layout/Header";

const AboutUs = () => {
  return (
    <section
      id="about"
      aria-label="Sección Sobre Nosotros"
      className="py-10 px-4 md:px-8 lg:px-16"
    >
      <Header
        title="¿Quiénes Somos?"
        subtitle="Conoce más acerca de nuestra filosofía institucional"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Imagen decorativa posicionada cerca del texto */}
        <Image
          src="/assets/bg-aboutus.webp"
          alt="Decoración abstracta"
          width={650}
          height={650}
          className="absolute -rotate-6 left-[-90px] top-[-70px] z-0 opacity-40 animate-pulse"
        />

        <Image
          src="/assets/icons-aboutus.webp"
          alt="Decoración abstracta"
          width={1000}
          height={1000}
          className="absolute -rotate-6 left-[-40px] bottom-[-190px] z-0 opacity-30"
        />

        {/* Imagen principal */}
        <div className="relative flex items-center justify-center z-10">
          <Image
            priority
            src="/assets/about-us.webp"
            alt="Ilustración sobre nosotros"
            width={800}
            height={800}
            className="relative z-10"
          />
        </div>

        {/* Contenido textual */}
        <div className="z-10">
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-foreground text-2xl font-bold leading-snug tracking-tight">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mt-2">
                Ser la tienda líder en soluciones tecnológicas, ofreciendo
                equipos de cómputo y accesorios de alta calidad, con un servicio
                al cliente excepcional y precios competitivos, impulsando la
                innovación y accesibilidad tecnológica en nuestra comunidad.
              </p>
            </div>
            <div>
              <h3 className="text-foreground text-2xl font-bold leading-snug tracking-tight">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mt-2">
                Brindar a nuestros clientes productos informáticos de última
                generación, garantizando asesoramiento personalizado, precios
                accesibles y un servicio confiable, con el compromiso de mejorar
                la experiencia tecnológica de cada usuario.
              </p>
            </div>
            <div className="pt-4">
              <Button className="rounded-full group">
                Conocer más
                <ArrowRight
                  strokeWidth={2.5}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
