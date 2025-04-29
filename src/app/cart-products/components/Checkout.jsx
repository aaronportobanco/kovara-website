"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../context/cart-context";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const Checkout = () => {
  const { clearCart, getCartTotal, getCartItemsCount } = useCart();
  const [loading, setLoading] = useState(false);
  
  const subtotal = getCartTotal();
  const impuestos = subtotal * 0.16; // 16% de impuestos
  const total = subtotal + impuestos;

  const handlePaymentClick = () => {
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-fit max-w-sm rounded-lg border border-foreground p-5 bg-background space-y-4">
      <h3 className="text-lg font-semibold">Resumen del pedido</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">C${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Impuestos (16%)</span>
          <span className="font-medium">C${impuestos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Envío</span>
          <span className="font-medium">Gratis</span>
        </div>
      </div>

      <Separator className="my-2" />

      <div className="flex justify-between text-base font-bold">
        <span>Total</span>
        <span>C${total.toFixed(2)}</span>
      </div>

      <div className="flex flex-col py-3 gap-2">
        <Button
          className="w-full"
          onClick={handlePaymentClick}
          disabled={getCartItemsCount() === 0 || loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Procesando...
            </>
          ) : (
            <>
              Proceder al Pago
              <ArrowRight />
            </>
          )}
        </Button>
        <Link href="/products">
          <Button variant="outline" className="w-full gap-2">
            <ArrowLeft />
            Seguir comprando
          </Button>
        </Link>
      </div>

      <div className="text-sm text-muted-foreground pt-2">
        Productos en el carrito: {getCartItemsCount()}
      </div>
    </div>
  );
};

export default Checkout;
