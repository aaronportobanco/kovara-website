import { DataChecklist } from "@/data/MockData";
import Image from "next/image";
import { Check } from "lucide-react";

function CheckList() {
  return (
    <section
      aria-label="Propuesta de valor"
      id="checklist"
      className="p-5 md:px-8 lg:p-16 w-full relative"
    >
      {/* Imagen decorativa posicionada cerca del texto */}
      <Image
        src="/assets/bg-4.webp"
        alt="Decoración abstracta"
        width={650}
        height={650}
        className="absolute -rotate-6 left-[-10px] top-[70px] z-0 opacity-10 scale-125 md:scale-100" // Added responsive scaling on mobile
      />

      <Image
        src="/assets/bg-8.webp"
        alt="Decoración abstracta"
        width={900}
        height={900}
        className="absolute -rotate-6 right-[20px] top-[70px] z-0 opacity-10 blur-sm"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Imagen principal */}
        <div className="relative flex items-center justify-center z-10">
          <Image
            priority
            src="/assets/checklist-main.webp"
            alt="Imagen ilustrativa de la propuesta de valor"
            width={500}
            height={500}
            className="relative z-10 scale-125 md:scale-100" // Added scaling on mobile
          />
        </div>

        {/* Contenido textual */}
        <div className="z-10">
          <h2 className="text-xl md:text-3xl font-heading font-bold mb-6">
            La Experiencia Informática Definitiva
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            En Kovara, creemos que el hardware adecuado puede transformar tu
            experiencia digital. Ya seas un profesional, creador o gamer,
            tenemos las herramientas que necesitas para sobresalir.
          </p>

          <div className="gap-8 flex flex-col">
            {DataChecklist.map((item, index) => (
              <ChecklistItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistItem({ title, description }) {
  return (
    <div className="flex items-start">
      <div className="bg-[#3B82F6]/20 p-2 rounded-md mr-4 mt-1">
        <Check className="h-4 w-4 text-[#3B82F6]" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default CheckList;
