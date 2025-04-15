import Header from "@/components/layout/header/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function AboutUs() {
  // Content data for easier maintenance
  const content = {
    sections: [
      {
        title: "Nuestra Visión",
        text: "Ser la tienda líder en soluciones tecnológicas, ofreciendo equipos de cómputo y accesorios de alta calidad, con un servicio al cliente excepcional y precios competitivos, impulsando la innovación y accesibilidad tecnológica en nuestra comunidad.",
      },
      {
        title: "Nuestra Misión",
        text: "Somos una tienda que brinda a nuestros clientes productos informáticos de última generación, garantizando asesoramiento personalizado, precios accesibles y un servicio confiable, con el compromiso de mejorar la experiencia tecnológica de cada usuario.",
      },
    ],
  };

  return (
    <section className="flex flex-col items-center gap-[50px] px-[30px]">
      <Header
        title={"Sobre Nosotros"}
        subtitle={"Conoce más sobre nuestra filosofía Institucional"}
      />

      <div className="flex items-center justify-center gap-[60px] w-full">
        <div className="flex flex-col h-[388px] justify-center gap-3 items-start">
          {content.sections.map((section, index) => (
            <React.Fragment key={index}>
              <h2 className="self-stretch text-xl font-bold text-foreground">
                {section.title}
              </h2>
              <p
                className={`${
                  index === 0 ? "w-[555px]" : "self-stretch"
                } font-basics-p-ui text-muted-foreground`}
              >
                {section.text}
              </p>
            </React.Fragment>
          ))}

          <div className="flex gap-2.5 pt-[50px] pb-0 px-0 self-stretch w-full items-center">
            <Button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-foreground rounded-md">
              <ArrowRight strokeWidth={3} />
              <span className="w-fit mt-[-1px] font-medium text-sm text-background">
                Conocer más
              </span>
            </Button>
          </div>
        </div>

        <Card className="w-[532px] h-[291px] bg-[#d9d9d9] rounded-md">
          <CardContent className="p-0 h-full"></CardContent>
        </Card>
      </div>
    </section>
  );
}
