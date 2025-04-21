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
import { ShoppingCart } from "lucide-react";

const ProductCardDetail = ({ open, onOpenChange, product }) => {
  if (!product) return null;

  const { nombre, descripcion, especificaciones, precio, stock, imagen, alt } =
    product;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl">{nombre}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-4">
          {/* Imagen */}
          <div className="w-full md:w-[300px] flex justify-center items-center">
            <Image
              src={imagen}
              alt={alt}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-auto max-h-[200px] md:max-h-[240px]"
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h4 className="font-semibold text-sm sm:text-base">
                Disponibilidad:
              </h4>
              <Badge className="text-xs w-fit">{stock} en stock</Badge>
            </div>

            <p className="text-sm text-muted-foreground">{descripcion}</p>

            <Separator className="bg-gray-700" />

            <div>
              <h4 className="font-semibold mb-2">Especificaciones:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {especificaciones.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator className="bg-gray-700" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
              <p className="text-lg font-bold text-foreground">
                C$
                {precio.toLocaleString("es-NI", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <Button className="w-full md:w-auto gap-2">
                <ShoppingCart strokeWidth={2.5} />
                Añadir al carrito
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCardDetail;
