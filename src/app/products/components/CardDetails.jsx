"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/app/cart-products/context/cart-context";
import { useState } from "react";

const CardDetails = ({ open, onOpenChange, product }) => {
  if (!product) return null;
  const { nombre, descripcion, stock, precio, imagen, alt, especificaciones } =
    product;
  const { cart, addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  // const inCart = cart.some((item) => item.id === product.id); // Replaced by cartItem check

  const cartItem = cart.find((item) => item.id === product.id);
  const inCart = !!cartItem;
  const isStockLimitReachedInCart = cartItem && cartItem.quantity >= stock;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, 1); // Call context's addToCart directly
    setTimeout(() => {
      setIsAdding(false);
    }, 700); // Adjust delay if needed
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl w-full bg-slate-800/50 backdrop-blur-md rounded-md 
        px-4 pt-10 md:py-6 sm:px-6 md:p-8 
        h-full sm:h-auto overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl ">{nombre}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Sección: Imagen */}
          <div className="w-full h-[350px] md:h-full md:w-[300px] flex justify-center items-center">
            <Image
              src={imagen}
              alt={alt}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[250px] md:max-h-[240px]"
              loading="lazy"
            />
          </div>

          {/* Separador vertical */}
          <Separator
            orientation="vertical"
            className="hidden md:block bg-gray-700"
          />

          {/* Sección: Contenido del modal */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h3 className="font-semibold text-sm sm:text-base">
                Disponibilidad:
              </h3>
              <Badge
                className={
                  stock === 0
                    ? "text-xs bg-red-600 text-white w-fit"
                    : "text-xs w-fit"
                }
              >
                {stock === 0 ? "Agotado" : `${stock} en stock`}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">{descripcion}</p>

            <Separator className="bg-gray-700" />

            <div>
              <h3 className="font-semibold mb-2">Especificaciones:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {especificaciones.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator className="bg-gray-700" />

            {/* Sección: Precio y acción */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="font-semibold text-sm sm:text-base">Precio:</h3>
                <p className="text-lg font-bold text-foreground">
                  C$
                  {precio.toLocaleString("es-NI", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>

              <Button
                className="w-full md:w-auto gap-2"
                onClick={handleAddToCart}
                disabled={stock === 0 || isAdding || isStockLimitReachedInCart}
              >
                {isAdding ? (
                  <span className="flex items-center">
                    <ShoppingCart className="mr-2 h-4 w-4 animate-bounce" />
                    Añadiendo...
                  </span>
                ) : isStockLimitReachedInCart ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Límite alcanzado
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
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardDetails;
