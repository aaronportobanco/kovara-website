"use client";

import React, { useState } from "react";
import { Eye, ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/app/cart-products/context/cart-context";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CardDetails from "./CardDetails";

const CardVertical = ({ data }) => {
  const { nombre, descripcion, precio, stock, imagen, alt } = data;
  const { cart, addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const inCart = cart.some((item) => item.id === data.id);
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    const currentProduct = cart.find((item) => item.id === data.id);
    if (currentProduct && currentProduct.quantity >= stock) {
      addToCart(data, 1);
      return;
    }
    setIsAdding(true);
    setTimeout(() => {
      addToCart(data, 1);
      setIsAdding(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between rounded-[10px] border-foreground border bg-background">
      {/* Sección: Imagen */}
      <div className="w-full h-[250px] p-4 md:p-1 rounded-md overflow-hidden flex justify-center items-center">
        <Image
          src={imagen}
          alt={alt}
          width={350}
          height={200}
          className="object-cover rounded-md"
        />
      </div>

      <Separator className="bg-gray-700" />

      {/* Sección: Contenido (título, descripción, precio) */}
      <CardContent className="px-4">
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

        <CardDescription className="text-sm text-muted-foreground mt-2">
          {descripcion}
        </CardDescription>

        <div className="p-0 mt-4">
          <h4 className="text-lg md:text-lg font-bold text-foreground">
            C${precio.toLocaleString("es-NI", { minimumFractionDigits: 2 })}
          </h4>
        </div>

        {/* Sección: Botones */}
        <CardFooter className="p-0 mt-3 flex flex-col sm:flex-row justify-between gap-2">
          <Button className="w-full sm:flex-1 gap-2" onClick={handleAddToCart}>
            {isAdding ? (
              <span className="flex items-center">
                <ShoppingCart className="mr-2 h-4 w-4 animate-bounce" />
                Añadiendo...
              </span>
            ) : inCart ? (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                En el carrito
              </span>
            ) : (
              <span className="flex items-center">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir al Carrito
              </span>
            )}
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
      {/* Sección: Modal de detalles */}
      <CardDetails open={open} onOpenChange={setOpen} product={data} />
    </Card>
  );
};

export default CardVertical;