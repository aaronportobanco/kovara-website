"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/cart-context";

const PageItem = ({ data }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { nombre, descripcion, precio, imagen, alt, id } = data;
  const quantity = data.quantity || 1;

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <Card className="border border-foreground bg-background w-full flex flex-col md:flex-row gap-4 p-4 rounded-lg">
      {/* Imagen */}
      <div className="w-full md:w-[200px] h-[200px] overflow-hidden rounded-md flex items-center justify-center bg-background">
        <Image
          src={imagen}
          alt={alt}
          width={200}
          height={200}
          className="object-cover rounded-md"
        />
      </div>

      {/* Separador vertical */}
      <div>
        <Separator
          orientation="vertical"
          className="hidden md:block bg-gray-700"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 gap-8">
        {/* Título y precio */}
        <div className="flex justify-between items-start flex-wrap gap-2">
          <CardTitle className="text-lg font-semibold">{nombre}</CardTitle>
          <p className="text-lg font-bold">
            C${precio.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Descripción */}
        <CardContent className="p-0 text-muted-foreground text-sm leading-snug">
          {descripcion}
        </CardContent>

        {/* Controles */}
        <div className="flex flex-row justify-between items-start sm:items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-destructive border-destructive hover:bg-destructive hover:text-white transition"
            onClick={() => removeFromCart(id)}
          >
            <Trash2 className="w-4 h-4" />
            Eliminar
          </Button>

          <div className="flex items-center border border-gray-400 rounded-md px-3 py-1 w-fit">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={handleDecrease}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="mx-2 text-sm font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={handleIncrease}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PageItem;
