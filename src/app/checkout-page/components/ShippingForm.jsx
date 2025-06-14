"use client";

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Truck, Box, ArrowLeft, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function ShippingForm({ onNext }) {
  const [selectedOption, setSelectedOption] = useState("delivery"); // Initialize state

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <header className="flex flex-col items-start gap-2">
          <p className="text-blue-400 text-sm">Paso 01</p>
          <h3 className="text-lg font-bold">Información de Envío</h3>
        </header>
        <Link href="/cart-products">
          <Button
            variant="Link"
            className="group p-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1"/>
            Volver al carrito
          </Button>
        </Link>
      </div>
      <Separator className="bg-gray-600" /> {/* Added mt-4 for spacing */}
      <form className="space-y-6 bg-slate-800/50 border border-foreground p-6 rounded-lg">
        <RadioGroup
          id="shippingMethod"
          defaultValue="delivery"
          onValueChange={(value) => setSelectedOption(value)} // Update state on change
          className="flex flex-row justify-around gap-4 m-0"
        >
          <div
            className={`flex items-center w-full space-x-2 border bg-gray-700/40 rounded-md p-4 ${
              selectedOption === "delivery"
                ? "border-blue-600"
                : "border-gray-600"
            } transition-colors`}
          >
            <RadioGroupItem value="delivery" id="delivery" />
            <Truck strokeWidth={1.5} />
            <Label htmlFor="delivery">Delivery</Label>
          </div>
          <div
            className={`flex items-center w-full space-x-2 border bg-gray-700/40 rounded-md p-4 ${
              selectedOption === "pickup"
                ? "border-blue-600"
                : "border-gray-600"
            } transition-colors`}
          >
            <RadioGroupItem value="pickup" id="pickup" />
            <Box strokeWidth={1.5} />
            <Label htmlFor="pickup">Pickup</Label>
          </div>
        </RadioGroup>
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g. example@domain.com"
            className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="firstName">Nombre *</Label>
            <Input
              id="firstName"
              placeholder="Ingresa tu primer nombre"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="lastName">Apellido *</Label>
            <Input
              id="lastName"
              placeholder="Ingresa tu primer apellido"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="address">Dirección *</Label>
          <Input
            id="address"
            placeholder="Ingresa tu dirección domiciliaria"
            className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="city">Ciudad *</Label>
            <Input
              id="city"
              placeholder="Ingresa tu ciudad de residencia"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="state">Estado *</Label>
            <Select>
              <SelectTrigger className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600">
                <SelectValue placeholder="Departamento de residencia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cdmx">Ciudad de México</SelectItem>
                <SelectItem value="jalisco">Jalisco</SelectItem>
                <SelectItem value="nuevo-leon">Nuevo León</SelectItem>
                <SelectItem value="puebla">Puebla</SelectItem>
                <SelectItem value="veracruz">Veracruz</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="zipCode">Código Postal *</Label>
            <Input
              id="zipCode"
              placeholder="Ingresa el código postal"
              className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Ingresa un número de teléfono"
            className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600"
          />
        </div>
        <Separator className="my-2 bg-gray-600" />

        <div className="flex items-center space-x-2">
          <Checkbox id="saveInfo" />
          <Label htmlFor="saveInfo" className="text-sm">
            Guardar esta información para futuras compras
          </Label>
        </div>
      </form>
      <Button
        type="button"
        className="group w-full rounded-lg"
        onClick={() => {
          onNext();
          scrollToSection("checkout");
        }}
      >
        Continuar al Pago
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
      </Button>
    </section>
  );
}
