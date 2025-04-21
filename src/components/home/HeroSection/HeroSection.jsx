import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Promotional message"
      className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full relative"
    >
      {/* Imagen decorativa posicionada en el fondo */}
      <Image
        src="/assets/bg-9.webp"
        alt="Decoración abstracta"
        width={650}
        height={650}
        className="absolute rotate-45 left-[-20px] top-[10px] z-0 opacity-10 blur-sm"
      />

      <Image
        src="/assets/bg-4.webp"
        alt="Decoración abstracta"
        width={650}
        height={650}
        className="absolute rotate-6 right-[-50px] top-[40px] z-0 opacity-10"
      />

      <div className="flex flex-col gap-7 z-10">
        <h1 className="text-3xl font-bold text-foreground leading-tight">
          Tu tienda de computación de confianza
        </h1>

        <p className="text-base text-muted-foreground">
          Descubre las últimas computadoras y accesorios a precios competitivos.
          Productos de calidad, asesoramiento experto y servicio excepcional.
        </p>

        <div className="flex items-center gap-5">
          <Link href="/products">
            <Button
              variant="outline"
              className="group font-medium text-foreground bg-blue-600 hover:bg-blue-700 rounded-full"
            >
              Ver Productos
              <ArrowRight
                strokeWidth={3}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>

          <Button className="rounded-full">Contáctanos</Button>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="relative flex items-center justify-center z-10">
        <Image
          priority
          src="/assets/hero-main.webp"
          alt="Ilustración principal"
          width={950}
          height={800}
          className="relative z-10"
        />
      </div>
    </section>
  );
}
