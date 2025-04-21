"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import ProductCardDetail from "@/app/products/components/ProductCardDetail";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HorizontalCard = ({ data }) => {
  const { nombre, descripcion, precio, stock, imagen, alt, especificaciones } =
    data;
  const [open, setOpen] = useState(false);

  return (
    <Card className="w-full flex flex-col md:flex-row items-stretch gap-6 p-4 border border-foreground bg-background rounded-[10px]">
      {/* Imagen */}
      <div className="w-full md:w-[250px] flex justify-center items-center overflow-hidden rounded-md">
        <Image
          src={imagen}
          alt={alt}
          width={250}
          height={250}
          className="object-cover rounded-md"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 gap-5">
        {/* Título y Stock */}
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex-1">
            <CardTitle className="text-base text-foreground sm:text-lg font-semibold">
              {nombre}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {descripcion}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="text-xs text-gray-400 px-3 py-1 h-fit rounded-full whitespace-nowrap border-foreground border-[0.5px]"
          >
            {stock} en Stock
          </Badge>
        </div>

        {/* Lista de especificaciones */}
        <CardContent className="flex-1 py-0 px-0">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {especificaciones.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>

        {/* Precio y botones */}
        <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-0 py-0">
          <h4 className="text-lg md:text-lg font-bold text-foreground">
            C${precio.toLocaleString("es-NI", { minimumFractionDigits: 2 })}
          </h4>

          <div className="flex gap-2 w-full sm:w-auto">
            <Button className="w-full sm:w-auto gap-2">
              <ShoppingCart strokeWidth={3} />
              Añadir
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto border-foreground border-[0.5px] hover:bg-foreground/10"
              aria-label="Ver detalles"
              onClick={() => setOpen(true)}
            >
              <Eye className="w-5 h-5" />
              <span className="text-sm">Detalles</span>
            </Button>
          </div>
        </CardFooter>
      </div>
      <ProductCardDetail open={open} onOpenChange={setOpen} product={data} />
    </Card>
  );
};

export default HorizontalCard;
