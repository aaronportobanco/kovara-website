"use client";

import { useState } from "react";
import { useCart } from "@/app/cart-products/context/cart-context";
import scrollToSection from "@/utils/scroll-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Wallet,
  CreditCard,
  DollarSign,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function PaymentForm({ onNext, onBack }) {
  const { getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const impuestos = subtotal * 0.16; // 16% de impuestos
  const total = subtotal + impuestos;

  const [selectedOption, setSelectedOption] = useState("creditCard"); // Initialize state

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <header className="flex flex-col items-start gap-2">
          <p className="text-blue-400 text-sm">Paso 02</p>
          <h3 className="text-lg font-bold">Método de Pago</h3>
        </header>
        <Button
          variant="Link"
          href="/cart-products"
          className="p-0 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft />
          Volver al carrito
        </Button>
      </div>
      <Separator className="bg-gray-600" /> {/* Added mt-4 for spacing */}
      <form className="space-y-6 bg-slate-800/50 border border-foreground p-6 rounded-lg">
        <RadioGroup
          id="paymentMethod"
          defaultValue="creditCard"
          onValueChange={(value) => setSelectedOption(value)} // Update state on change
          className="flex flex-row justify-around gap-4 m-0"
        >
          <div
            className={`flex items-center w-full space-x-2 border bg-gray-700/40 rounded-md px-4 py-6 ${
              selectedOption === "creditCard"
                ? "border-blue-600"
                : "border-gray-600"
            } transition-colors`}
          >
            <RadioGroupItem value="creditCard" id="creditCard" />
            <CreditCard strokeWidth={1.5} />
            <Label htmlFor="creditCard">Tarjeta Bancaria</Label>
          </div>
          <div
            className={`flex items-center w-full space-x-2 border bg-gray-700/40 rounded-md px-4 py-6 ${
              selectedOption === "mobileWallet"
                ? "border-blue-600"
                : "border-gray-600"
            } transition-colors`}
          >
            <RadioGroupItem value="mobileWallet" id="mobileWallet" />
            <Wallet strokeWidth={1.5} />
            <Label htmlFor="mobileWallet">Billetera Móvil</Label>
          </div>
          <div
            className={`flex items-center w-full space-x-2 border bg-gray-700/40 rounded-md px-4 py-6 ${
              selectedOption === "paypal"
                ? "border-blue-600"
                : "border-gray-600"
            } transition-colors`}
          >
            <RadioGroupItem value="paypal" id="paypal" />
            <DollarSign strokeWidth={1.5} />
            <Label htmlFor="paypal">Paypal</Label>
          </div>
        </RadioGroup>
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="cardNumber">Numero de Tarjeta *</Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9012 3456"
            className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="expirationDate">Fecha de Expiración *</Label>
            <Input
              id="expirationDate"
              placeholder="MM/AA"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="cvv">CVV *</Label>
            <Input
              id="cvv"
              placeholder="Ingresa el CVV"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="address">Nombre en la Tarjeta *</Label>
          <Input
            id="cardName"
            placeholder="Ingresa el nombre en la tarjeta"
            className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
          />
        </div>

        <Separator className="my-2 bg-gray-600" />

        <div className="flex items-center justify-end">
          <h3>Total a pagar: &nbsp;</h3>
          <span className="text-lg font-bold">C${total.toFixed(2)}</span>
        </div>
      </form>
      <div className="flex flex-row gap-4">
        <Button
          type="button"
          variant="filled"
          className="w-full rounded-lg"
          onClick={() => {
            onBack();
            scrollToSection("checkout");
          }}
        >
          <ArrowLeft />
          Volver al envío
        </Button>
        <Button
          type="button"
          className="w-full rounded-lg"
          onClick={() => {
            onNext();
            scrollToSection("checkout");
          }}
        >
          Confirmar pedido
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
