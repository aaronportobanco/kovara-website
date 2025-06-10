import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const TransactionItem = ({ data }) => {
  const { marca, nombre, precio, imagen, alt } = data;
  const quantity = data.quantity || 1;

  return (
    <div className="flex w-full h-full p-4 items-center gap-4 border border-gray-700 rounded-lg bg-slate-800/30">
      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={imagen}
          alt={alt || nombre || "Imagen del producto"}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <Separator orientation="vertical" className="h-16 bg-gray-600" />
      <div className="flex flex-1 h-20 flex-col justify-evenly">
        <h4 className="font-semibold text-sm text-foreground">{nombre}</h4>
        {marca && (
          <p className="text-sm text-muted-foreground mt-0.5">{marca}</p>
        )}
      </div>
      <div className="ml-auto text-right flex-shrink-0 flex flex-col items-end justify-between h-20">
        <span className="text-sm font-semibold text-foreground">
          C$&nbsp;{precio.toFixed(2)}
        </span>
        <Badge
          variant="outline"
          className="border-gray-600 text-muted-foreground mt-2"
        >
          Cant: {quantity}
        </Badge>
      </div>
    </div>
  );
};

export default TransactionItem;
