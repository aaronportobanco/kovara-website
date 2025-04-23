"use client";

import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import PageItem from "./components/PageItem";
import Checkout from "./components/Checkout";
import { DataProducts } from "@/data/MockData";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  return (
    <section className="flex flex-col p-6 md:px-6 gap-8 text-foreground bg-background">
      {/* Breadcrumb y encabezado */}
      <BreadcrumbComp page="Carrito" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Carrito de compras</h2>
        <p className="text-base text-muted-foreground">
          Revisa y gestiona tus productos antes de finalizar tu compra.
        </p>
      </div>

      {/* Layout principal: Items + Checkout */}
      <div className="flex flex-col lg:flex-row gap-7 w-full">
        {/* Lista de productos */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold">Productos (13)</h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Vaciar carrito
            </Button>
          </div>
          {DataProducts.map((product) => (
            <PageItem key={product.id} data={product} />
            
          ))}
        </div>

        {/* Checkout (Resumen de compra) */}
        <div className="w-full lg:w-[350px] shrink-0">
          <Checkout subtotal={1799.87} impuestos={316.8} total={3037.4} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
