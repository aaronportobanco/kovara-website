"use client";

import React from "react";
import { useState } from "react";
import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ProductCardDetail from "@/app/products/components/ProductCardDetail";

const VerticalCard = ({ data }) => {
  const { nombre, descripcion, precio, stock, imagen, alt } = data;
  const [open, setOpen] = useState(false);

  return (
      <Card className="w-full max-w-sm flex flex-col justify-between rounded-[10px] border-foreground border bg-background">
        {/* Imagen */}
        {/* Unified height for consistent layout across devices */}
        <div className="w-full h-[250px] p-2 rounded-md overflow-hidden flex justify-center items-center">
          <Image
            src={imagen}
            alt={alt}
            width={350}
            height={200}
            className="object-cover rounded-[5px]"
          />
        </div>

        <Separator className="bg-gray-700" />

        {/* Contenido del Card */}
        <CardContent className="px-4">
          {/* Título y Stock */}
          <div className="flex justify-between items-center mt-4 gap-2">
            <CardTitle className="text-base text-foreground sm:text-lg font-semibold">
              {nombre}
            </CardTitle>
            <Badge
              variant="outline"
              className="text-xs text-gray-400 px-2 py-1 rounded-full whitespace-nowrap border-foreground border-[0.5px]"
            >
              {stock} en Stock
            </Badge>
          </div>

          {/* Descripción */}
          <CardDescription className="text-sm text-muted-foreground mt-2">
            {descripcion}
          </CardDescription>

          {/* Precio */}
          <div className="p-0 mt-4">
            <h4 className="text-lg md:text-lg font-bold text-foreground">
              C${precio.toLocaleString("es-NI", { minimumFractionDigits: 2 })}
            </h4>
          </div>

          {/* Botones */}
          <CardFooter className="p-0 mt-3 flex flex-col sm:flex-row justify-between gap-2">
            <Button className="w-full sm:flex-1 gap-2">
              <ShoppingCart strokeWidth={3} />
              Añadir al Carrito
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-11 h-11 border-foreground border-[0.5px] hover:bg-foreground/10 p-0 sm:justify-center justify-center"
              aria-label="Ver detalles"
              onClick={() => setOpen(true)}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="text-sm sm:hidden">Ver detalles</span>
              </div>
            </Button>
          </CardFooter>
        </CardContent>
        {/* Modal */}
        <ProductCardDetail open={open} onOpenChange={setOpen} product={data} />
      </Card>
  );
};

export default VerticalCard;
