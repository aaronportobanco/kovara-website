"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Custom Components
import PDFViewer from "./components/ViewPDF";
import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import MisionVision from "./components/MisionVisionSection";
import Valores from "./components/ValorSection";
import Politica from "./components/PoliticasSection";
import ReglamentosNormativas from "./components/ReglamentosNormativasSection";
import Canva from "./components/CanvaSection";

// Main Page
const AboutUsPage = () => {
  const [activeGroup, setActiveGroup] = useState("Reglamentos"); // Útil para ReglamentosNormativas

  return (
    <main className="flex flex-col items-center gap-6 px-8 py-5 bg-slate-900">
      <BreadcrumbComp page="Sobre nosotros" />

      {/* Encabezado */}
      <section className="flex justify-between items-center w-full py-6">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-white text-3xl font-bold">Sobre Nosotros</h1>
          <p className="text-slate-400 text-base font-medium">
            Conoce más sobre Kovara y nuestra misión como empresa
          </p>
        </div>
        <div className="flex gap-5 flex-1 justify-end">
          <Button>
            <ArrowRight className="h-4 w-4 mr-2" />
            Ver Productos
          </Button>
          <Button variant="outline">Contáctanos</Button>
        </div>
      </section>

      {/* Contenido */}
      <section className="flex flex-col gap-20 w-full">
        <MisionVision />
        <Valores />
        <Politica />
        <Section title="Manual de marca">
          <PDFViewer />
        </Section>
        <Canva />
        <ReglamentosNormativas />
      </section>
    </main>
  );
};

// Subcomponentes reutilizables
const Section = ({ title, children }) => (
  <section className="flex flex-col gap-6 w-full">
    <h2 className="text-white text-2xl font-bold border-b border-slate-400 pb-2">
      {title}
    </h2>
    {children}
  </section>
);

export default AboutUsPage;
