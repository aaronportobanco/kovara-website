"use client";

import React from "react";
import { Eye, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const VerticalCard = ({ data }) => {
  const { nombre, descripcion, precio, stock } = data;
  return (
    <Card className="w-full max-w-sm flex flex-col justify-between p-5 rounded-[10px] border border-white/20 bg-background text-white">
      {/* Imagen */}
      <div className="w-full h-[200px] sm:h-[150px] md:h-[200px] bg-[#d9d9d9] rounded-[5px]" />

      {/* Título y Stock */}
      <div className="flex justify-between items-center mt-4 gap-2">
        <CardTitle className="text-base sm:text-lg font-semibold">
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
      <CardContent className="p-0 mt-4">
        <h4 className="text-lg sm:text-xl font-bold text-white">
          ${precio.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
        </h4>
      </CardContent>

      {/* Botones */}
      <CardFooter className="p-0 mt-3 flex flex-col sm:flex-row justify-between gap-2">
        <Button className="w-full sm:flex-1 gap-2">
          <ShoppingCart className="w-5 h-5" />
          Añadir al Carrito
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 w-full sm:w-11 h-11 border-foreground border-[0.5px] hover:bg-foreground/10 p-0 sm:justify-center justify-center"
          aria-label="Ver detalles"
        >
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            <span className="text-sm sm:hidden">Ver detalles</span>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};
