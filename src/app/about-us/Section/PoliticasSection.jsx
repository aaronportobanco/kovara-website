"use client";
import React from "react";

import {
  Card, CardContent
} from "@/components/ui/card";
import {
  HandCoins, ShieldCheck, EarthLock
} from "lucide-react";


const Politica = () => {
    return (
            <Section title="Políticas Internas">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CardItem icon={<HandCoins />} title={"Metodos de pago"}>
                    Se aceptan pagos en efectivo, transferencias bancarias y tarjetas de crédito/débito.
                </CardItem>

                <CardItem icon={<ShieldCheck />} title={"Garantias y devoluciones"}>
                    Los productos cuentan con garantía según el fabricante.
                    Devoluciones aplican en casos de defectos de fábrica.
                </CardItem>

                <CardItem icon={<EarthLock />} title={"Privacidad"}>
                    La información del cliente será tratada con total confidencialidad.
                </CardItem>
                </div>
            </Section>
        )
}

const Section = ({ title, children }) => (
    <section className="flex flex-col gap-6 w-full">
      <h2 className="text-white text-2xl font-bold border-b border-slate-400 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
  
  const CardItem = ({ icon, title, children }) => (
    <Card className="bg-slate-800 text-white border border-slate-600">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-slate-600 p-2 rounded-full">{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-slate-300">{children}</p>
      </CardContent>
    </Card>
  );

export default Politica;