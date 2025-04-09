import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between gap-8 w-full">
      <div className="flex flex-col w-full max-w-[536px] gap-7">
        <h1 className="text-3xl font-bold text-foreground leading-tight">
          Tu tienda de computación de confianza
        </h1>

        <p className="text-base text-muted-foreground">
          Descubre las últimas computadoras y accesorios a precios competitivos.
          Productos de calidad, asesoramiento experto y servicio excepcional.
        </p>

        <div className="flex items-center gap-5">
          <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
            <ArrowRight className="h-4 w-4" />
            <span>Ver Productos</span>
          </Button>

          <Button
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground/10 bg-background"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      <div className="relative w-[536px] h-[356px] bg-[#d9d9d9] rounded-md" />
    </section>
  );
}
