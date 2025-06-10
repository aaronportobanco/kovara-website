"use client";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/app/cart-products/context/cart-context";
import { LockKeyhole, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductItem from "./ProductItem";

const OrderSummary = ({ step }) => {
  const { getCartTotal, getCartItemsCount, cart } = useCart();

  const subtotal = getCartTotal();
  const impuestos = subtotal * 0.16; // 16% de impuestos
  const total = subtotal + impuestos;

  if (step !== 1 && step !== 2) {
    return null;
  }

  return (
    <div className="lg:sticky top-10 shadow-lg w-full h-fit border border-foreground max-w-lg rounded-lg p-5 bg-slate-800/50 space-y-4">
      <h3 className="text-lg font-semibold">Detalle del pedido</h3>

      <div className="text-sm text-muted-foreground">
        Productos a pagar: {getCartItemsCount()}
      </div>
      <Separator className="my-2 bg-gray-600" />

      <div className="overflow-y-auto max-h-60 space-y-3">
        {cart.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>

      <Separator className="my-2 bg-gray-600" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">C$&nbsp;{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Impuestos (16%)</span>
          <span className="font-medium">C$&nbsp;{impuestos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Envío</span>
          <span className="font-medium">Gratis</span>
        </div>
      </div>
      <div className="relative w-full max-w-sm">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <TicketPercent className="h-5 w-5" />
        </span>
        <Input
          type="cupon"
          placeholder="Cupón de descuento"
          className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600 pr-24 pl-10"
        />
        <Button
          type="submit"
          variant="filled"
          className="absolute right-1 top-1 bottom-1 h-auto px-4 font-bold hover:bg-blue-600 transition-colors"
        >
          Aplicar
        </Button>
      </div>
      <Separator className="my-2 bg-gray-600" />

      <div className="flex justify-between text-base font-bold">
        <span>Total</span>
        <span>C$&nbsp;{total.toFixed(2)}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <LockKeyhole className="inline mr-1 h-4 w-4" />
          <span className="font-bold text-xs">Compra segura y protegida</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Nos aseguramos que tu información esté protegida y que tu compra sea
          segura. Utilizamos protocolos de seguridad avanzados para proteger tus
          datos y garantizar una experiencia de compra confiable.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
