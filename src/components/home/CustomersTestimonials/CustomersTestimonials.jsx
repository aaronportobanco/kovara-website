"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTestimonials } from "@/data/MockData";
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const CustomersTestimonials = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    setCurrent(api.selectedScrollSnap());
  }, [api]);

  return (
    <section
      id="customers-testimonials"
      className="rounded-xl bg-gray-800/30 p-5 md:px-8 lg:p-16 w-full"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-10">
        {/* Header */}
        <div>
          <Header
            title="Lo que dicen nuestros clientes"
            subtitle="Descubre por qué somos la elección preferida de las personas que buscan tecnología de calidad"
          />
        </div>

        {/* Carrusel con botones laterales responsivos */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-4">
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <CarouselPrevious
                  onClick={() => api?.scrollPrev()}
                  className="rounded-full hover:bg-muted px-6 md:px-0"
                />
                <CarouselNext
                  onClick={() => api?.scrollNext()}
                  className="rounded-full hover:bg-muted px-6 md:px-0"
                />
              </div>

              <CarouselContent>
                {DataTestimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:px-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-slate-800 relative p-6 min-h-[380px] sm:min-h-[420px] lg:h-[370px] rounded-2xl shadow-xl flex flex-col justify-between">
                      <Quote
                        width={30}
                        height={30}
                        className="opacity-20 self-start"
                      />

                      {/* Contenido principal */}
                      <CardContent className="p-5 flex-grow">
                        <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                          {testimonial.text}
                        </blockquote>
                      </CardContent>
                      <Separator className="bg-gray-700" />
                      {/* Footer */}
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={testimonial.image}
                            alt={`Foto de ${testimonial.name}`}
                            loading="lazy"
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Dots */}
              <div className="flex justify-center mt-6 gap-3">
                {Array.from({ length: DataTestimonials.length }).map(
                  (_, index) => (
                    <button
                      type="button"
                      aria-label={`Ir al testimonio ${index + 1}`}
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        current === index ? "bg-[#3B82F6]" : "bg-gray-300"
                      }`}
                    />
                  )
                )}
              </div>
            </Carousel>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Más de <strong>500 clientes satisfechos</strong> nos han confiado sus
          necesidades tecnológicas en los últimos 3 años.
        </p>
      </div>
    </section>
  );
};

export default CustomersTestimonials;
