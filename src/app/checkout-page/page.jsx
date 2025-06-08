import React from "react";
import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import { CheckoutStepper } from "./components/CheckoutStepper";
import { ShippingForm } from "./components/ShippingForm";
import OrderSummary from "./components/OrderSummay";

/* const STEPS = [
  {
    id: 1,
    title: "Información de Envío",
    description: "Dirección y datos de contacto",
  },
  {
    id: 2,
    title: "Método de Pago",
    description: "Selecciona tu forma de pago",
  },
  { id: 3, title: "Confirmación", description: "Revisa tu pedido" },
  { id: 4, title: "Completado", description: "¡Pedido realizado!" },
];
 */
const CheckOut = () => {
  return (
    <section className="flex flex-col p-4 md:px-6 gap-8">
      {/* Breadcrumb y encabezado */}
      <BreadcrumbComp page="Checkout" />
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Checkout</h2>
        <p className="text-base text-muted-foreground">
          Complete su compra de forma segura.
        </p>
      </div>
      {/* <CheckoutStepper steps={STEPS} currentStep={1} /> */}
      <div className="grid gap-8 lg:grid-cols-3 rounded-2xl">
        <div className="lg:col-span-2">
          <ShippingForm />
        </div>
        <div className="lg:col-span-1 rounded-2xl">
          <OrderSummary/>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
