import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ProductItem = ({ data }) => {
  const { nombre, precio, imagen, alt } = data;
  const quantity = data.quantity || 1;
  return (
      <div className="flex items-center gap-3">
        <div className="border border-gray-600 relative w-20 h-20 rounded-md overflow-hidden">
          <Image
            src={imagen}
            alt={alt}
            fill
            className="object-contain rounded-md aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm">{nombre}</h4>
          <div className="flex items-center gap-2">
            <Badge className="text-xs">
              Cant: {quantity}
            </Badge>
            <span className="text-sm font-medium">
              C${precio.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
            </span>
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
