"use client";

import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import PageItem from "./components/PageItem";
import Checkout from "./components/Checkout";
import { useCart } from "./context/cart-context";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, clearCart } = useCart(); // Obtener productos del carrito

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
            <h2 className="text-base font-bold">
              Productos ({cart.length})
            </h2>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={clearCart} // Vaciar carrito
              disabled={cart.length === 0} // Deshabilitado si el carrito está vacío
            >
              <Trash2 className="w-4 h-4" />
              Vaciar carrito
            </Button>
          </div>
          {cart.map((product) => (
            <PageItem key={product.id} data={product} />
          ))}
        </div>

        {/* Checkout (Resumen de compra) */}
        <div className="w-full lg:w-[350px] shrink-0">
          <Checkout />
        </div>
      </div>
    </section>
  );
};

export default CartPage;