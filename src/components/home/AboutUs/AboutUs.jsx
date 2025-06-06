"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../layout/Header";

const AboutUs = () => {
  return (
    <section
      id="about"
      aria-label="Sección Sobre Nosotros"
      className="rounded-xl bg-gray-800/30 p-5 md:px-8 lg:p-16"
    >
      <Header
        title="¿Quiénes Somos?"
        subtitle="Conoce más acerca de nuestra filosofía institucional"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative">
        {/* BG imagen para desktop */}
        <Image
          src="/assets/bg-4.webp"
          alt="Decoración abstracta"
          width={700}
          height={700}
          className="absolute -rotate-6 scale-150 md:scale-100 left-1/2 -translate-x-1/2 md:left-[-70px] md:translate-x-0 top-[40px] z-0 opacity-10 hidden lg:block"
        />

        {/* Imagen principal con BG imagen para mobile */}
        <div className="relative flex items-center justify-center z-10">
          {/* BG imagen para mobile */}
          <Image
            src="/assets/bg-4.webp"
            alt="Decoración abstracta"
            width={700}
            height={700}
            className="absolute -rotate-6 scale-150 md:scale-120 left-1/2 -translate-x-1/2 top-[60px] z-0 opacity-10 lg:hidden"
          />
          {/* Imagen principal */}
          <Image
            priority
            src="/assets/about-us-main.webp"
            alt="Ilustración sobre nosotros"
            width={800}
            height={800}
            className="relative z-10 scale-125 md:scale-100"
          />
        </div>

        {/* Contenido textual */}
        <div className="z-10">
          <div className="md:mt-8 space-y-6">
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
              <Link href="/about-us">
                <Button className="rounded-full group">
                  Conocer más
                  <ArrowRight
                    strokeWidth={2.5}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
