import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Promotional message"
      className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full "
    >
      <div className="flex flex-col gap-7">
        <h1 className="text-3xl font-bold text-foreground leading-tight">
          Tu tienda de computación de confianza
        </h1>

        <p className="text-base text-muted-foreground">
          Descubre las últimas computadoras y accesorios a precios competitivos.
          Productos de calidad, asesoramiento experto y servicio excepcional.
        </p>

        <div className="flex items-center gap-5">
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

          <Button className="rounded-full">Contáctanos</Button>
        </div>
      </div>
      {/* SVG usando el componente Image */}
      <div className="bg-gray-400 relative w-full h-[356px] rounded-xl"></div>
    </section>
  );
}
