"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const Checkout = ({ subtotal, impuestos, envio = "Gratis", total }) => {
  return (
    <div className="w-full h-fit max-w-sm rounded-lg border border-foreground p-5 bg-background space-y-4">
      <h3 className="text-lg font-semibold">Resumen del pedido</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Impuestos (16%)</span>
          <span className="font-medium">${impuestos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Envío</span>
          <span className="font-medium">{envio}</span>
        </div>
      </div>

      <Separator className="my-2" />

      <div className="flex justify-between text-base font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="space-y-2 pt-2">
        <Button className="w-full">Proceder al Pago</Button>
        <Button variant="outline" className="w-full gap-2">
          <ArrowLeft className="w-4 h-4" />
          Continuar Comprando
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
