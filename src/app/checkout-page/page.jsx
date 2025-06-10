"use client";

import React from "react";
import { ShippingForm } from "./components/ShippingForm";
import { PaymentForm } from "./components/PaymentForm";
import OrderSummary from "./components/OrderSummay";
import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import TransactionSummary from "./components/TransactionSummary";

const CheckOut = () => {
// Manage the current step in the checkout process
const [step, setStep] = React.useState(1); // 1: shipping, 2: payment, 3: summary

// Function to handle step change
const handleNext = () => setStep((prev)=> prev + 1);
const handleBack = () => setStep((prev)=> prev - 1);

  return (
    <section id="checkout" className="flex flex-col p-4 md:px-6 gap-8">
      {/* Breadcrumb y encabezado */}
      <BreadcrumbComp page="Checkout" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Checkout</h2>
        <p className="text-base text-muted-foreground">
          Complete su compra de forma segura.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 rounded-2xl pt-2">
        <div className="lg:col-span-2">
          {step === 1 && <ShippingForm onNext={handleNext} />}
          {step === 2 && <PaymentForm onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <TransactionSummary onBack={handleBack} />}
        </div>
        <div className="lg:col-span-1 rounded-2xl">
          <OrderSummary step={step} />
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
