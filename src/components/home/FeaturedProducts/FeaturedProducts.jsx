"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import VerticalCard from "@/components/products/VerticalCard";
import Link from "next/link";
import { DataProducts } from "@/data/MockData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Autoplay plugin for Embla Carousel
const FeaturedProducts = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section
      id="featured-products"
      aria-label="Productos destacados"
      className="rounded-xl bg-gray-800/30 p-5 md:px-8 lg:p-16 w-full relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-20 items-center">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 flex flex-col justify-center gap-6">
          <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground text-base font-medium leading-relaxed">
            Aquí puedes encontrar una selección de nuestros productos más
            populares.
          </p>
          <div className="w-full">
            <Link href="/products" className="w-full">
              <Button className="rounded-full group w-full">
                Más productos
                <ArrowRight
                  strokeWidth={3}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-3">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <div className="flex justify-between items-center">
              <CarouselPrevious className="rounded-full hover:bg-muted px-6 md:px-0" />
              <CarouselNext className="rounded-full hover:bg-muted px-6 md:px-0" />
            </div>

            <CarouselContent className="pl-1">
              {DataProducts.slice(0, 6).map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-full md:basis-1/2"
                >
                  <VerticalCard data={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
