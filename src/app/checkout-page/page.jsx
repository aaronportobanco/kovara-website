"use client";

import React from "react";
import { ShippingForm } from "./components/ShippingForm";
import { PaymentForm } from "./components/PaymentForm";
import TransactionSummary from "./components/TransactionSummary";
import OrderSummary from "./components/OrderSummay";
import BreadcrumbComp from "@/components/layout/BreadcrumbComp";

const CheckOut = () => {
  // Manage the current step in the checkout process
  const [step, setStep] = React.useState(1); // 1: shipping, 2: payment, 3: summary

  // Function to handle step change
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

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
      {/* The className of this div is dynamically set.
          When step === 3, it includes "flex justify-center",
          which centers its children horizontally. */}
      <div
        className={`rounded-2xl pt-2 ${
          step === 3 ? "flex justify-center" : "grid gap-8 lg:grid-cols-3"
        }`}
      >
        {/* When step === 3, this div's className becomes effectively empty,
            allowing it to be centered by its parent's "flex justify-center". */}
        <div className={step === 3 ? "" : "lg:col-span-2"}>
          {step === 1 && <ShippingForm onNext={handleNext} />}
          {step === 2 && <PaymentForm onNext={handleNext} onBack={handleBack} />}
          {/* TransactionSummary is rendered here when step === 3 and will be centered. */}
          {step === 3 && <TransactionSummary onNext={handleNext} onBack={handleBack}/>}
        </div>
        <div className="lg:col-span-1 rounded-2xl">
          {/* Conditionally render OrderSummary if step is not 3 */}
          {step !== 3 && <OrderSummary/>}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
